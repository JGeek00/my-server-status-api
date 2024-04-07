import si, { Systeminformation } from "systeminformation";
import data from "../config/data.json";

const getStatus = async () => {
  const {
    cpu,
    cpuCurrentSpeed,
    cpuTemperature,
    mem,
    memLayout,
    fsStats,
    currentLoad,
    networkStats,
    osInfo,
    time,
  }: {
    cpu: Systeminformation.CpuData;
    cpuCurrentSpeed: Systeminformation.CpuTemperatureData;
    cpuTemperature: Systeminformation.CpuTemperatureData;
    mem: Systeminformation.MemData;
    memLayout: Systeminformation.MemLayoutData[];
    fsStats: Systeminformation.FsStatsData;
    currentLoad: Systeminformation.CurrentLoadData;
    networkStats: Systeminformation.NetworkStatsData[];
    osInfo: Systeminformation.OsData;
    time: Systeminformation.TimeData;
  } = await si.get({
    cpu: data.status.cpuInfo.join(","),
    cpuCurrentSpeed: data.status.cpuSpeed.join(","),
    cpuTemperature: data.status.cpuTemperature.join(","),
    mem: data.status.memory.join(","),
    memLayout: data.status.memoryInfo.join(","),
    fsStats: data.status.storage.join(","),
    currentLoad: data.status.load.join(","),
    networkStats: data.status.network.join(","),
    osInfo: "platform",
    time: data.status.system.join(",")
  });

  const cpuStatus = {
    specs: {
      name: `${cpu.manufacturer} ${cpu.brand}`,
      minSpeed: cpu.speedMin,
      speed: cpu.speed,
      maxSpeed: cpu.speedMax,
    },
    cores: Array.from({ length: cpuCurrentSpeed.cores.length }, (_, i) => ({
      speed: cpuCurrentSpeed.cores[i] ?? null,
      temperature: cpuTemperature.cores[i] ?? null,
      load: currentLoad.cpus[i] ?? null,
    })),
    average: {
      speed: cpuCurrentSpeed.main,
      temperature: cpuTemperature.main,
      load: {
        average: currentLoad.currentLoad,
        user: currentLoad.currentLoadUser,
        system: currentLoad.currentLoadSystem,
        idle: currentLoad.currentLoadIdle,
      },
    },
  };

  const memory = {
    specs: {
      capacity: memLayout.map((m) => m.size).reduce((a, b) => a + b),
      type: memLayout[0].type,
    },
    total: mem.total ?? null,
    used: mem.used ?? null,
    free: mem.free ?? null,
    active: mem.active ?? null,
  };

  const storage = ["linux", "darwin"].includes(osInfo.platform)
    ? {
        rx: fsStats.rx_sec ?? 0,
        wx: fsStats.wx_sec ?? 0,
      }
    : null;

  const network =
    osInfo.platform !== "sun"
      ? networkStats.map((e) => ({
          iface: e.iface,
          tx: e.tx_sec ?? 0,
          rx: e.rx_sec ?? 0,
        }))
      : null;

  const system = {
    uptime: time.uptime ?? null
  }

  return {
    cpu: cpuStatus,
    socketTemperature: cpuTemperature.socket ?? null,
    chipsetTemperature: cpuTemperature.chipset ?? null,
    memory,
    storage,
    network,
    system,
  };
};

export default getStatus;
