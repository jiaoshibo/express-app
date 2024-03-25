export class BaseResultCode {
    private code?:number;
    private msg?:string;
    

    constructor(code:number,msg:string) {
        this.code = code;
        this.msg = msg;
    }

    get getCode() {
        return this.code;
    }

    get getMsg() {
        return this.msg;
    }
    static SUCCESS = new BaseResultCode(200,'success');
    static FAILED =  new BaseResultCode(500,'failed');
}