import si, { Systeminformation } from "systeminformation";
import data from "../config/data.json";

const getStatus = async () => {
  const {
    cpuCurrentSpeed,
    cpuTemperature,
    mem,
    fsSize,
    currentLoad,
  }: {
    cpuCurrentSpeed: Systeminformation.CpuTemperatureData;
    cpuTemperature: Systeminformation.CpuTemperatureData;
    mem: Systeminformation.MemData;
    fsSize: Systeminformation.FsSizeData[];
    currentLoad: Systeminformation.CurrentLoadData;
  } = await si.get({
    cpuCurrentSpeed: data.status.cpuSpeed.join(","),
    cpuTemperature: data.status.cpuTemperature.join(","),
    mem: data.status.memory.join(","),
    fsSize: data.status.storage.join(","),
    currentLoad: data.status.load.join(","),
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

  const storage = fsSize.map((item: Systeminformation.FsSizeData) => ({
    name: item.fs ?? null,
    type: item.type ?? null,
    size: item.size ?? null,
    used: item.used ?? null,
    available: item.available ?? null,
    percentageUsed: item.use ?? null,
    mount: item.mount ?? null,
    writable: item.rw ?? null,
  }));

  return {
    cpu: cpuStatus,
    socket: cpuTemperature.socket ?? null,
    chipset: cpuTemperature.chipset ?? null,
    memory,
    storage,
  };
};

export default getStatus;
