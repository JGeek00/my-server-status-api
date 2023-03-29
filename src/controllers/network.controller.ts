import si, { Systeminformation } from "systeminformation";
import { outputNumber } from "./../functions/typeConversions";
import data from "../config/data.json";

const getNetworkInfo = async () => {
  const {
    networkInterfaces,
  }: {
    networkInterfaces: Systeminformation.NetworkInterfacesData[];
  } = await si.get({
    networkInterfaces: data.network.join(","),
  });

  return {
    networkInterfaces: networkInterfaces.map((i) => ({
      ...i,
      mtu: outputNumber(i.mtu),
      speed: outputNumber(i.speed)
    })),
  };
};

export default getNetworkInfo;
