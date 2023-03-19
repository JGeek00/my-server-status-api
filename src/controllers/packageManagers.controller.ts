import si, { Systeminformation } from "systeminformation";
import { checkPackageManager } from './../functions/checkPackageManager';

export const getPackageManagers = async () => {
  const { osInfo }: { osInfo: Systeminformation.OsData} = await si.get({
    osInfo: 'platform, distro'
  });

  if (osInfo.platform === 'linux') {
    const pms = await checkPackageManager();
    return pms;
  } else {
    return 'OS not supported';
  }
}