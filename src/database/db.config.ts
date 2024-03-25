import type { ConnectionOptions } from 'mysql2/promise';

export const config:ConnectionOptions = {
    host: 'localhost',
    user: 'root',
    database: 'express',
    password: 'root',
    port: 3306
}