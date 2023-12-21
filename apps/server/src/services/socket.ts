import { Server } from "socket.io";
import { logger } from "../utils/logger";

class SocketService {
  private _io: Server;

  constructor() {
    logger("Running Socket Server...");
    this._io = new Server();
  }

  get io() {
    return this._io;
  }
}

export default SocketService;
