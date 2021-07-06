import { createLogger, transports, format, info } from "winston";

const loggerInfo = createLogger({
  transports: [
    new transports.File({
      filename: "src/utils/logs/info.log",
      level: "info",      
      format: format.combine(format.timestamp(), format.json()),
      handleExceptions: true,
    }),
  ],
});

const loggerError = createLogger({
  transports: [
    new transports.File({
      filename: "src/utils/logs/error.log",
      level: "info",      
      format: format.combine(format.timestamp(), format.json()),
      handleExceptions: true,
    }),
  ],
});

export { loggerInfo, loggerError }