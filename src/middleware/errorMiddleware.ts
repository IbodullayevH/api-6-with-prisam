import { ErrorHandler } from "@errors";
import { NextFunction, Request, Response } from "express";

export class ErrorHandlerMiddleware {

    static async ErrorHandlerMiddleware(err: ErrorHandler, req: Request, res: Response, next: NextFunction) {
        res.status(err.status || 500).send({
            success: false,
            message: err.message || "Some thing wentrong"
        })
    }
}