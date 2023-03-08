import si, { Systeminformation } from "systeminformation";
import data from "../config/data.json";

const getSystemInfo = async () => {
  const {
    system,
    bios,
    baseboard,
    chassis,
  }: {
    system: Systeminformation.SystemData;
    bios: Systeminformation.BiosData;
    baseboard: Systeminformation.BaseboardData;
    chassis: Systeminformation.ChassisData;
  } = await si.get({
    system: data.system.system.join(","),
    bios: data.system.bios.join(","),
    baseboard: data.system.baseboard.join(","),
    chassis: data.system.chassis.join(","),
  });

  return {
    system,
    bios,
    baseboard,
    chassis
  }
};

export default getSystemInfo;
