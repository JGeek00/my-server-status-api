import si, { Systeminformation } from "systeminformation";
import data from "../config/data.json";

const getStatus = async () => {
  const {
    cpuCurrentSpeed,
    cpuTemperature,
    mem,
    fsStats,
    currentLoad,
    networkStats,
    osInfo,
  }: {
    cpuCurrentSpeed: Systeminformation.CpuTemperatureData;
    cpuTemperature: Systeminformation.CpuTemperatureData;
    mem: Systeminformation.MemData;
    fsStats: Systeminformation.FsStatsData;
    currentLoad: Systeminformation.CurrentLoadData;
    networkStats: Systeminformation.NetworkStatsData;
    osInfo: Systeminformation.OsData;
  } = await si.get({
    cpuCurrentSpeed: data.status.cpuSpeed.join(","),
    cpuTemperature: data.status.cpuTemperature.join(","),
    mem: data.status.memory.join(","),
    fsStats: data.status.storage.join(","),
    currentLoad: data.status.load.join(","),
    networkStats: data.status.network.join(","),
    osInfo: "platform",
  });

  const cpuStatus = {
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

  const network = osInfo.platform !== "sun"
    ? {
        tx: networkStats.tx_sec ?? 0,
        rx: fsStats.rx_sec ?? 0,
      }
    : null;

  return {
    cpu: cpuStatus,
    socketTemperature: cpuTemperature.socket ?? null,
    chipsetTemperature: cpuTemperature.chipset ?? null,
    memory,
    storage,
    network
  };
};

export default getStatus;
