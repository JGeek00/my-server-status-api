import si, { Systeminformation } from "systeminformation";
import dataConfig from "../config/data.json";

const getStorageInfo = async () => {
  const {
    diskLayout,
    blockDevices,
    fsSize,
  }: {
    diskLayout: Systeminformation.DiskLayoutData
    blockDevices: Systeminformation.BlockDevicesData;
    fsSize: Systeminformation.FsSizeData;
  } = await si.get({
    diskLayout: dataConfig.storage.diskLayout.join(","),
    blockDevices: dataConfig.storage.blockDevices.join(","),
    fsSize: dataConfig.storage.fsSize.join(","),
  });

  return {
    diskLayout,
    blockDevices,
    fsSize
  }
};

export default getStorageInfo;
