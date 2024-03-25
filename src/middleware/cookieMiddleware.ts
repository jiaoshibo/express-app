import type { Request, Response, NextFunction } from 'express'


export function cookieMiddleware (req:Request, res:Response, next:NextFunction){
    if(!req.cookies.flag){
        res.cookie('flag','1',{maxAge:7*24*60*60*1000})
    }

    next()
}