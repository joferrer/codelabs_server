
export class ResponseS {
    status: boolean;
    message: string;
    body: any;
    constructor(pStatus: boolean,pMessage: string, pBody?:any){
        this.status = pStatus
        this.message = pMessage
        if(pBody) this.body = pBody
        else this.body =  pBody || {};
    }

    toJson(): string {
        return JSON.stringify(this);
      }
    
}

export class ResponseJSON {
    status: boolean;
    message: JSON;
    body: any;
    constructor(pStatus: boolean,pMessage: JSON, pBody?:any){
        this.status = pStatus
        this.message = pMessage
        if(pBody) this.body = pBody
        else this.body =  pBody || {};
    }

    toJson(): string {
        return JSON.stringify(this);
      }
    
}

export class ResponseArray{
    status: boolean;
    message: [];
    body: any;
    constructor(pStatus: boolean,pMessage: [], pBody?:any){
        this.status = pStatus
        this.message = pMessage
        if(pBody) this.body = pBody
        else this.body =  pBody || {};
    }

    toJson(): string {
        return JSON.stringify(this);
      }
    
}