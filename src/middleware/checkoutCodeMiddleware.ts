import type { Request, Response, NextFunction } from 'express';

export function checkoutCodeMiddleware(req: Request, res: Response, next: NextFunction){
    if(req.body.code === '12345'){
        next()
    }else{
        res.send({
            code:'500',
            message:'Invalid code'
        })
    }
}