import { updatePackagesApt } from './../functions/updatePackagesApt';

export const updatePackages = async (packageManager: string) => {
  if (packageManager === "apt") {
    const result = await updatePackagesApt();
    return result;
  } 
  else {
    return null;
  }
}