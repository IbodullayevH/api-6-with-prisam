import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "src/errors";

export class ErrorHandlerMiddleware {

    static async ErrorHandlerMiddleware(err: ErrorHandler, req: Request, res: Response, next: NextFunction) {
        res.status(err.status || 500).send({
            success: false,
            message: err.message || "Some thing wentrong"
        })
    }
}