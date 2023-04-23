import { execSync } from "child_process";
import si, { Systeminformation } from "systeminformation";

const rebootMachine = async () => {
  const { osInfo }: { osInfo: Systeminformation.OsData } = await si.get({
    osInfo: "platform",
  });

  if (osInfo.platform === "linux") {
    try {
      execSync("sudo shutdown -r now");
      return true;
    } catch (error) {
      return false;
    }
  }
  else if (osInfo.platform === "Windows") {
    try {
      execSync("shutdown /r");
      return true;
    } catch (error) {
      return false;
    }
  }
  else if (osInfo.platform === "darwin") {
    try {
      execSync("sudo shutdown -r now");
      return true;
    } catch (error) {
      return false;
    }
  }
  else {
    return false;
  }
}

export default rebootMachine;