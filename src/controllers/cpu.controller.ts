import si, { Systeminformation } from "systeminformation";
import dataConfig from "../config/data.json";

const getCpuInfo = async () => {
  const {
    cpu,
    cpuCurrentSpeed,
    cpuTemperature,
  }: {
    cpu: Systeminformation.CpuData;
    cpuCurrentSpeed: Systeminformation.CpuCurrentSpeedData;
    cpuTemperature: Systeminformation.CpuTemperatureData;
  } = await si.get({
    cpu: dataConfig.cpu.cpu.join(","),
    cpuCurrentSpeed: dataConfig.cpu.currentSpeed.join(","),
    cpuTemperature: dataConfig.cpu.temperature.join(","),
  });
  return { cpu, cpuCurrentSpeed, cpuTemperature };
};

export default getCpuInfo;
