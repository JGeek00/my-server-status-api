import execa from "execa";
import si, { Systeminformation } from "systeminformation";

// https://stackoverflow.com/a/28268802
async function testFltmc() {
	try {
		await execa('fltmc');
		return true;
	} catch {
		return false;
	}
}

export const checkRootAccess = async () => {
  const { osInfo }: { osInfo: Systeminformation.OsData } = await si.get({
    osInfo: "platform",
  });

  if (osInfo.platform === "linux") {
    if (process.geteuid) {
      return process.geteuid() === 0; // UID 0 is always root
    } else {
      return false;
    }
  }
  else if (osInfo.platform === "Windows") {
    try {
      // https://stackoverflow.com/a/21295806/1641422
      // @ts-ignore
      await execa('fsutil', ['dirty', 'query', process.env.systemdrive]);
      return true;
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        return testFltmc();
      }
  
      return false;
    }
  }
  else {
    return true;
  }
};
