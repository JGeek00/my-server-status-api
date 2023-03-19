import { execShellCommand } from './../utils/execShellCommand';

export const updatePackagesApt = async () => {
  try {
    const result = await execShellCommand("apt -y upgrade");
    console.log(result)
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error)
    return false;
  }
}