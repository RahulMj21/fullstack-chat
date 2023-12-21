import http from "http";
import SocketService from "./services/socket";
import { logger } from "./utils/logger";

const init = async () => {
  const socketService = new SocketService();
  const httpServer = http.createServer();
  const PORT = process.env.PORT || "8000";

  socketService.io.attach(httpServer);

  httpServer.listen(PORT, () => {
    logger(`server is listning on PORT: ${PORT}`);
  });
};

init();
