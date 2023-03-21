import si, { Systeminformation } from "systeminformation";
import dataConfig from "../config/data.json";

export const getOsInfo = async () => {
  const os: Systeminformation.OsData = await si.get({
    osInfo: dataConfig.os.join(",")
  });
  return os;
}