import server from "./server";

server
  .listen(server.get("port"))
  .on("listening", () =>
    console.log("Server listening on port", server.get("port"))
  )
  .on("error", (e) => console.log(e));
