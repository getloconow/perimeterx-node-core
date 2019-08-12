export declare class PxEnforcer{
    public enforce<T, F>(req:F, res: T, cb: (error:Error, response:  T) => void);
    constructor(params: any, client: PxClient)
};
export declare class PxClient{

}

