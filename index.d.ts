export declare class PxEnforcer{
    public enforce<T, F>(req:F, res: T, cb: (error:Error, response:  T) => void);
    constructor(params: any, client: PxClient)
    config: any
};
export declare class PxClient{

}
