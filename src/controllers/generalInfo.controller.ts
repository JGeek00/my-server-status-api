import si, { Systeminformation } from "systeminformation";
import dataConfig from "../config/data.json";

const getGeneralInfo = async () => {
  const {
    cpu,
    cpuCurrentSpeed,
    cpuTemperature,
    currentLoad,
    mem,
    memLayout,
    fsSize,
    networkInterfaces,
  }: {
    cpu: Systeminformation.CpuData;
    cpuCurrentSpeed: Systeminformation.CpuCurrentSpeedData;
    cpuTemperature: Systeminformation.CpuTemperatureData;
    currentLoad: Systeminformation.CurrentLoadCpuData;
    mem: Systeminformation.MemData;
    memLayout: Systeminformation.MemLayoutData;
    fsSize: Systeminformation.FsSizeData;
    networkInterfaces: Systeminformation.NetworkInterfacesData;
  } = await si.get({
    cpu: dataConfig.general.cpu.cpu.join(","),
    cpuCurrentSpeed: dataConfig.general.cpu.currentSpeed.join(","),
    cpuTemperature: dataConfig.general.cpu.temperature.join(","),
    currentLoad: dataConfig.general.cpu.load.join(","),
    mem: dataConfig.general.memory.memory.join(","),
    memLayout: dataConfig.general.memory.layout.join(","),
    fsSize: dataConfig.general.storageFs.join(","),
    networkInterfaces: dataConfig.general.network.join(","),
  });
  
  return {
    cpu: {
      info: cpu,
      speed: cpuCurrentSpeed,
      temp: cpuTemperature,
      load: currentLoad,
    },
    memory: {
      info: mem,
      layout: memLayout
    },
    storageFs: fsSize,
    network: networkInterfaces,
  };
};

export default getGeneralInfo;
