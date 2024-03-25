import type {Request, Response, NextFunction} from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import dayjs from 'dayjs';
import { R } from '../common/R'


export async function createExpressMiddleware(req:Request, res:Response, next:NextFunction){
    try {
        const fileHandler = await fs.open(path.join(__dirname, '../access.log'), 'a+');
        fileHandler.createWriteStream().write(`[${dayjs().format('YY/MM/DD HH:mm:ss')}]  ${req.path}  ${req.ip}\r\n`);
        fileHandler.close();

        next()
    } catch (error:any) {
        res.send(R.fail('服务器错误'))
    }
}