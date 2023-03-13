import si, { Systeminformation } from "systeminformation";
import dataConfig from "../config/data.json";

const getMemoryInfo = async () => {
  const {
    mem,
    memLayout,
  }: {
    mem: Systeminformation.MemData;
    memLayout: Systeminformation.MemLayoutData;
  } = await si.get({
    mem: dataConfig.memory.memory.join(","),
    memLayout: dataConfig.memory.layout.join(","),
  });
  return { mem, memLayout };
};

export default getMemoryInfo;
