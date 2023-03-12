import si, { Systeminformation } from "systeminformation";
import dataConfig from "../config/data.json";

const getCpuInfo = async () => {
  const {
    cpu,
    cpuCurrentSpeed,
    cpuTemperature,
    currentLoad
  }: {
    cpu: Systeminformation.CpuData;
    cpuCurrentSpeed: Systeminformation.CpuCurrentSpeedData;
    cpuTemperature: Systeminformation.CpuTemperatureData;
    currentLoad: Systeminformation.CurrentLoadCpuData
  } = await si.get({
    cpu: dataConfig.cpu.cpu.join(","),
    cpuCurrentSpeed: dataConfig.cpu.currentSpeed.join(","),
    cpuTemperature: dataConfig.cpu.temperature.join(","),
    currentLoad: dataConfig.cpu.load.join(",")
  });
  return { cpu, cpuCurrentSpeed, cpuTemperature, currentLoad };
};

export default getCpuInfo;
