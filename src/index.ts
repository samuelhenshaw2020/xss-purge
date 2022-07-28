import { NextFunction, Request, Response } from 'express';
import {inHTMLData} from 'xss-filters';


function Clean(data: any): any{
    let isObject = false;

    if(typeof data === 'object'){
        data = JSON.stringify(data)
        isObject = true;
    }

    data = inHTMLData(data).trim();
    if(isObject) data = JSON.parse(data);

    return data;
}


function Xss() {
    return (req: Request, res: Response, next: NextFunction): void => {
        if (req.body) req.body = Clean(req.body)
        if (req.query) req.query = Clean(req.query)
        if (req.params) req.params = Clean(req.params)
    
        next()
    }
};

module.exports =  Xss;