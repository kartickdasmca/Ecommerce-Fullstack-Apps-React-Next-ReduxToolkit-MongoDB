
import db from '../../lib/db'
import logger from "../../utils/logger";
export default function handler(req, res) {
  db.connectDb()
  db.disconnectDb()

  res.status(200).json({ name: 'John Doe' })
}
