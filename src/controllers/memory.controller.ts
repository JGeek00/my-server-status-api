import si, { Systeminformation } from "systeminformation";
import dataConfig from "../config/data.json";

const getMemoryInfo = async () => {
  const { mem }: { mem: Systeminformation.MemData } = await si.get({
    mem: dataConfig.memory.join(","),
  });
  return mem;
};

export default getMemoryInfo;
