
import fs from 'fs';
import path from 'path';

export function ensureLogsFolder() {
  const logsPath = path.join(process.cwd(), 'logs');

  if (!fs.existsSync(logsPath)) {
    fs.mkdirSync(logsPath);
    console.log('[Logger] logs/ directory created');
  }
}
