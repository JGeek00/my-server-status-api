import si, { Systeminformation } from "systeminformation";
import { checkUpdatesApt } from './../functions/checkUpdatesApt';
import packageManagers from '../constants/packageManagers.json';
import { checkRootAccess } from "../functions/checkRootAccess";

export const checkPackagesUpdates = async () => {
  const { osInfo }: { osInfo: Systeminformation.OsData} = await si.get({
    osInfo: 'platform, distro'
  });

  if (checkRootAccess()) {
    if (osInfo.platform === 'linux') {
      // @ts-ignore
      if (packageManagers[osInfo.distro] === 'apt') {
        checkUpdatesApt()
      } 
      else {
        return {
          "message": "Distro not supported"
        }
      }
    }
    else {
      return {
        "message": "OS not supported"
      }
    }
  }
  else {
    return {
      "message": "No root access. The API requires root access to execute the update commands."
    }
  }
}