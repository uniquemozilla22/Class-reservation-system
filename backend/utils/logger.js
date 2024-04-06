import winston from "winston";

const enumerateErrorFormat = winston.format(info => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    enumerateErrorFormat(),
    winston.format.uncolorize(),
    winston.format.splat(),
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  transports: [
    new winston.transports.Console({
      stderrLevels: ["error"],
    }),
  ],
});

export const HTTPLogger = (method) =>(req,res)=>{
  logger.info(`${req.originalUrl} ${req.method} ----- ${req.body && JSON.stringify(req.body)}`)
  return method(req,res)
}

export default logger;