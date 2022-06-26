import { WebSocketServer } from "ws";
import { httpServer } from "./src/http_server/index";
import connection from "./src/connection";

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
  port: 8080,
});

wss.on("connection", connection);

console.log("WS server is running in port 8080");

process.on("SIGINT", () => {
  console.log(`WS server closed.`);
  wss.close();
  process.exit();
});
