import si, { Systeminformation } from "systeminformation";
import dataConfig from "../config/data.json";

export const getBasicOsInfo = async () => {
  const { osInfo }: { osInfo: Systeminformation.OsData } = await si.get({
    osInfo: dataConfig.basicOsInfo.join(","),
  });
  return osInfo;
};
