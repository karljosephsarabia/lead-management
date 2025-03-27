import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { MongoServerError } from "mongodb";


const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    
    if (err instanceof ZodError) {
        return res.status(400).json({
            status: "error",
            message: "Validation Failed",
            error: err.errors.map(err => ({
                field: err.path.join('.'),
                message: err.message
            }))
        });
    }

    if (err instanceof MongoServerError) {
        if (err.code === 11000) {
            return res.status(400).json({
                status: "error",
                message: "Email already exists. Please use a different email",
                error: "Duplicate Key"
            });
        }
    }

    return res.status(500).json({
        status: "error",
        message: "An internal server error occurred.",
        error: "Internal Server Error"
    });
};

export default errorHandler;