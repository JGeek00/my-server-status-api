import { checkPackageManager } from './../functions/checkPackageManager';
import { checkRootAccess } from './../functions/checkRootAccess';
import si, { Systeminformation } from "systeminformation";
import { checkUpdatesApt } from './../functions/checkUpdatesApt';

export const checkPackagesUpdates = async (selectedPackageManager: string) => {
  const { osInfo }: { osInfo: Systeminformation.OsData} = await si.get({
    osInfo: 'platform, distro'
  });

  if (checkRootAccess()) {
    if (osInfo.platform === 'linux') {
      const availablePackageManagers = await checkPackageManager();
      if (selectedPackageManager === 'apt' && availablePackageManagers.includes('apt')) {
        const upgrades = await checkUpdatesApt()
        if (upgrades.success) {
          return {
            "success": true,
            "output": upgrades.upgrades
          }
        }
        else {
          return {
            "success": false,
            "error": upgrades.error
          }
        }
      } 
      else {
        return {
          "success": true,
          "message": "Distro not supported"
        }
      }
    }
    else {
      return {
        "success": true,
        "message": "OS not supported"
      }
    }
  }
  else {
    return {
      "success": true,
      "message": "No root access. The API requires root access to execute the update commands."
    }
  }
}