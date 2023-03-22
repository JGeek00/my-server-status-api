import { checkRootAccess } from './functions/checkRootAccess';
import si, { Systeminformation } from "systeminformation";
import server from "./server";

const startServer = () => {
  server
    .listen(server.get("port"))
    .on("listening", () =>
      console.log("Server listening on port", server.get("port"))
    )
    .on("error", (e) => console.log(e));
}

const main = async () => {
  const { osInfo }:{osInfo: Systeminformation.OsData} = await si.get({
    osInfo: "platform"
  });

  if (osInfo.platform === "linux") {
    if (checkRootAccess()) {
      startServer();
    }
    else {
      console.error("No root permissions detected");
      process.exit(1);
    }
  }
  else {
    startServer();
  }
}

main();