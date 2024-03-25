import mysql from 'mysql2/promise';
import { config } from './db.config';

const connection = mysql.createConnection(config)
export default connection;