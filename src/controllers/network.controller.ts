import si, { Systeminformation } from "systeminformation";
import data from "../config/data.json";

const getNetworkInfo = async () => {
  const network: Systeminformation.NetworkInterfacesData = await si.get({
    networkInterfaces: data.network.join(","),
  });
  return network;
};

export default getNetworkInfo;
