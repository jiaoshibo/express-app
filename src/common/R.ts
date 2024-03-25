import { BaseResultCode } from './BaseResultCode';

export class R {
    readonly code?:number;
    readonly msg?:string;
    readonly data?:any;

    constructor(code?:number,msg?:string,data?:any) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    static success<D = any>(data:D,msg?:string){
        if(msg){
            return new R(BaseResultCode.SUCCESS.getCode, msg, data)
        }else{
            return new R(BaseResultCode.SUCCESS.getCode, BaseResultCode.SUCCESS.getMsg, data)
        }
        
    }

    static fail<D = any>(data: D,msg?:string){
        return msg ? new R(BaseResultCode.FAILED.getCode, msg, data) : new R(BaseResultCode.FAILED.getCode, BaseResultCode.FAILED.getMsg, data);
    }
}


