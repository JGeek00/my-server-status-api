import si, { Systeminformation } from "systeminformation";
import dataConfig from "../config/data.json";

const getCpuInfo = async () => {
  const { cpu }: { cpu: Systeminformation.CpuData } = await si.get({
    cpu: dataConfig.cpu.join(","),
  });
  return cpu;
};

export default getCpuInfo;
