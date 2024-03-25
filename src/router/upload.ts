import express from 'express';
import Busboy from 'busboy';
import path from "node:path";
import fs from "node:fs/promises";
import {R} from '../common/R'

const router = express.Router();

router.post('/upload',(req:express.Request,res:express.Response)=>{
    const busboy = Busboy({headers:req.headers});
    let fileName:string;
    busboy.on('file',(_name,stream,info)=>{
        fileName = info.filename;

        fs.readdir(path.join(__dirname, '../public/images')).catch(err => {
            console.error('捕获错误:::', err)
            return fs.mkdir(path.join(__dirname, '../public/images'), { recursive: true })
        }).then(()=>{
            return fs.open(path.join(__dirname, `../public/images/${info.filename}`), 'a+')
        }).then(handler => {
            stream.pipe(handler.createWriteStream());
        })
    })
    busboy.on('close',()=>{
        res.send(R.success({
            msg:'文件上传成功',
            filePath: `/images/${fileName}`
        }))
    })

    return req.pipe(busboy);
})

export default router;