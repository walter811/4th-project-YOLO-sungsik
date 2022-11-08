import { Request, Response, NextFunction } from "express";

const asyncWrap = (Controller: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Controller(req, res, next).catch(next);
  };
};

export { asyncWrap };
