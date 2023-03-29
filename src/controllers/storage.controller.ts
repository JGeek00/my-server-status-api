import si, { Systeminformation } from "systeminformation";
import dataConfig from "../config/data.json";
import { outputNumber } from "../functions/typeConversions";

const getStorageInfo = async () => {
  const {
    diskLayout,
    blockDevices,
    fsSize,
  }: {
    diskLayout: Systeminformation.DiskLayoutData;
    blockDevices: Systeminformation.BlockDevicesData;
    fsSize: Systeminformation.FsSizeData;
  } = await si.get({
    diskLayout: dataConfig.storage.diskLayout.join(","),
    blockDevices: dataConfig.storage.blockDevices.join(","),
    fsSize: dataConfig.storage.fsSize.join(","),
  });

  return {
    diskLayout,
    blockDevices: {
      ...blockDevices,
      size: outputNumber(blockDevices.size),
    },
    fsSize,
  };
};

export default getStorageInfo;
