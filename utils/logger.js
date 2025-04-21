import winston from 'winston';
import path from 'path';
import { ensureLogsFolder } from './initLoggerDir.js';

ensureLogsFolder(); // 👈 Ensures logs/ exists

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: path.join('logs', 'app.log') }),
    new winston.transports.Console() // optional for debugging
  ]
});

export default logger;
