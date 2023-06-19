
export class ResponseS {
    status: boolean;
    message: string;
    data: any;
    constructor(pStatus: boolean,pMessage: string, pdata?:any){
        this.status = pStatus
        this.message = pMessage
        if(pdata) this.data = pdata
        else this.data =  pdata || {};
    }

    toJson(): string {
        return JSON.stringify(this);
      }
    
}

