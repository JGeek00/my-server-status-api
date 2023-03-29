import si, { Systeminformation } from "systeminformation";
import { outputNumber, OUTPUT_TYPES } from "./../functions/typeConversions";
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
      speed: outputNumber(i.speed, OUTPUT_TYPES.FLOAT)
    })),
  };
};

export default getNetworkInfo;
