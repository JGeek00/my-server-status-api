import { checkRootAccess } from './functions/checkRootAccess';
import server from "./server";
import { readAppVersion } from './utils/readAppVersion';

const startServer = () => {
  server
    .listen(server.get("port"))
    .on("listening", async () => {
      const appVersion = await readAppVersion();
      console.log("Server listening on port", server.get("port"));
      console.log(`API v${appVersion}`);
    })
    .on("error", (e) => console.log(e));
}

const main = async () => {
  const root = await checkRootAccess();
  if (root) {
    startServer();
  }
  else {
    console.error("No root permissions detected");
    process.exit(1);
  }
}

main();