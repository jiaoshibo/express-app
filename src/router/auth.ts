import express from 'express';
import { R } from '../common/R';


const router = express.Router();



router.post('/login', (req:express.Request, res:express.Response)=>{
    res.send(R.success('login success'))
})

export default router;