import { Request, Response, NextFunction } from "express";

export const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    const statusCode = (err as any).statusCode || 500;
    const message = (err as any).message || "Server got into trouble";

    res.status(statusCode).json({message});
}

export default handleError;