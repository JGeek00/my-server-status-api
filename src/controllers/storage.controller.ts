import si, { Systeminformation } from "systeminformation";
import dataConfig from "../config/data.json";

const getStorageInfo = async () => {
  const {
    diskLayout,
    fsSize,
  }: {
    diskLayout: Systeminformation.DiskLayoutData;
    fsSize: Systeminformation.FsSizeData;
  } = await si.get({
    diskLayout: dataConfig.storage.diskLayout.join(","),
    fsSize: dataConfig.storage.fsSize.join(","),
  });
  
  return {
    diskLayout,
    fsSize
  }
};

export default getStorageInfo;
