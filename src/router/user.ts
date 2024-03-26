import express from 'express';
import * as UserDao from '../dao/user';
import { R } from '../common/R'

const router = express.Router();

/**
 * 获取用户列表
 */
router.get('/user',async (_req:express.Request,res:express.Response)=>{
    let userList = await UserDao.getUserList();
    res.send(R.success(userList))
})

/**
 * 根据id获取用户信息
 */
router.get('/user/:id',async (req:express.Request, res:express.Response)=>{
    let userList = await UserDao.getUserById(req.params.id);
    res.send(R.success(userList))
})

/**
 * 新增用户
 */
router.post('/user',async (req:express.Request, res:express.Response)=>{
    let affectedRows = await UserDao.insertUser(
        req.sessionID,
        req.body.username,
        req.body.password
    )
    if(affectedRows>0){
        res.send(R.success("新增成功"))
    }else{
        res.send(R.fail("新增失败"))
    }
})


/**
 * 更新用户
 */
router.put('/user/:id', async (req:express.Request, res:express.Response)=>{
    let affectedRows = await UserDao.updateUser(
        req.sessionID,
        req.body.username,
        req.body.password,
        req.params.id
    )
    if (affectedRows > 0) {
        res.send(R.success('更新成功'))
    } else {
        res.send(R.fail('更新失败'))
    }
})

/**
 * 删除用户
 */
router.delete('/user/:id', async (req: express.Request, res: express.Response)=>{
    let affectedRows = await UserDao.deleteUser(req.params.id);
    if (affectedRows > 0) {
        res.send(R.success('删除成功'))
    } else {
        res.send(R.fail('删除失败'))
    }
})

export default router;