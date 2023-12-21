import { TLogType } from "../types";

const log = console.log;

export const logger = (message: string, logType: TLogType = "info") => {
  switch (logType) {
    case "success":
      log(message, "color:white", "background-color:lime");
      break;

    case "error":
      log(message, "color:white", "background-color:red");
      break;

    default:
      log(message, "color:white", "background-color:blue");
      break;
  }
};
