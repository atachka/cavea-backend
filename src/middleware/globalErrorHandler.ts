import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

export const useGlobalErrorHandler = (fn: (req: Request, res: Response, next: NextFunction) => void) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export const globalErrorHandler = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    next();
    res.status(500).send(err);
};
