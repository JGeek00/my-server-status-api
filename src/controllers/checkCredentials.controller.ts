import { checkPackageManager } from './../functions/checkPackageManager';
import { getBasicOsInfo } from "../functions/getBasicOsInfo";

export const checkCredentialsController = async () => {
  const osInfo = await getBasicOsInfo();
  const pkgMgrs = await checkPackageManager();
  
  return {
    ...osInfo,
    packageManagers: pkgMgrs
  };
}