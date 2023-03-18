import { execShellCommand } from "./../utils/execShellCommand";

export const checkUpdatesApt = async () => {
  try {
    const updatesAvailable = await execShellCommand("apt update");
    if (updatesAvailable && (updatesAvailable as string).includes("apt list --upgradable")) {
      const upgradable = await execShellCommand("apt list --upgradable");
      return {
        'success': true,
        'upgrades': upgradable
      }
    } else {
      return {
        'success': true,
        'upgrades': ''
      }
    }
  } catch (error) {
    return {
      'success': false,
      error
    }
  }
};
