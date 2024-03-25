import bodyParser from 'body-parser';
import express from 'express';
import path from 'node:path';
import cookieParser from 'cookie-parser';
import * as session from 'express-session';
// 将session写入mysql
import mysqlSession from 'express-mysql-session';


import { cookieMiddleware } from './middleware/cookieMiddleware';
import {SystemConfig} from './config';
import home from './router/home';
import user from './router/user';
import upload from './router/upload';
import {createExpressMiddleware} from './middleware/recordMiddleware';
import auth from './router/auth'
import { config as DBConfig } from './database/db.config'

const app = express();

const MySQLStore = mysqlSession(session)
const sessionStore = new MySQLStore(DBConfig)

app.use(bodyParser.urlencoded({limit:'20mb',extended:true}));
app.use(bodyParser.json({limit:'20mb'}));
app.use(createExpressMiddleware);
app.use(express.static(path.join(__dirname, './public')))
app.use(cookieParser());
app.use(cookieMiddleware);
app.use(session.default({
    secret:'hamburger',
    resave:true,
    saveUninitialized:true, // 每次请求都设置一个cookie来保存session
    cookie:{secure:false, maxAge:60*60*1000,httpOnly:true},
    name:'sid',
    store: sessionStore
}));



app.use('/',home)
app.use('/',user);
app.use('/',upload);
app.use('/auth',auth);


app.listen(SystemConfig.port, () => {
    console.log(`Server is running at http://localhost:${SystemConfig.port}`);
})