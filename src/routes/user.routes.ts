import express from "express";
import * as userContoller from "../controllers/user.controller";
import { asyncWrap } from "../middlewares/errorHandler.middlewares";

const userRouter = express.Router();

userRouter.post("/signup", asyncWrap(userContoller.signUp));

export { userRouter };
