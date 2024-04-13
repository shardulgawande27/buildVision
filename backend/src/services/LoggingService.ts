import winston, { createLogger, transports, format } from "winston";
import { logType } from '@/src/enum/logType';

class LoggingService {
  private DEBUG_LOGGING_ON: boolean;
  private logger: winston.Logger;

  constructor() {
    this.DEBUG_LOGGING_ON = (process.env.NODE_ENV && process.env.NODE_ENV) === 'production' ? false : true;
    this.logger = createLogger({
      levels: winston.config.npm.levels,
      level: logType.DEBUG,
      format: format.combine(
        format.timestamp(),
        format.json(),
      ),
      transports: [
        new transports.File({ filename: "error.log", level: "error" }),
        new transports.File({ filename: "combined.log" })
      ]
    });
  }

  getWinstonLogger(): winston.Logger {
    return this.logger;
  }

  consoleLog(route: string, message: string, error: Error | null = null, level: string = logType.VERBOSE): void {
    if (error || level === logType.ERROR || level === logType.WARNING) {
      this.consoleErrorLog(route, message, error);
    } else if (level === logType.VERBOSE || level === logType.INFO || level === logType.DEBUG) {
    //   this.consoleDebugLog(route, message);
    }
  }

  consoleErrorLog(route: string, message: string, error: Error | null): void {
    this.logger.error({ route, message, error: error?.toString() });
  }

  consoleInfoLog(route: string, message: string): void {
    if (!this.DEBUG_LOGGING_ON) return;
    this.logger.info({ route, message });
  }
}

const logger = new LoggingService();

export {
  logger,
};
