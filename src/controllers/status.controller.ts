import si from "systeminformation";
import { FsItem } from "./../types/FsItem";
import data from "../config/data.json";

const getStatus = async () => {
  const { cpuCurrentSpeed, cpuTemperature, mem, fsSize } = await si.get({
    cpuCurrentSpeed: data.status.cpuSpeed.join(","),
    cpuTemperature: data.status.cpuTemperature.join(","),
    mem: data.status.memory.join(","),
    fsSize: data.status.storage.join(","),
  });

  const cpuStatus = Array.from(
    {
      length:
        cpuCurrentSpeed.cores.length > cpuTemperature.cores.length
          ? cpuCurrentSpeed.cores.length
          : cpuTemperature.cpres.length,
    },
    (_, i) => ({
      speed: cpuCurrentSpeed.cores[i] ?? null,
      temperature: cpuTemperature.cores[i] ?? null,
    })
  );

  const memory = {
    total: mem.total ?? null,
    used: mem.used ?? null,
    free: mem.free ?? null,
    active: mem.active ?? null,
  };

  const storage = fsSize.map((item: FsItem) => ({
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
