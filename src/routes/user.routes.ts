import express from "express";
import * as userContoller from "../controllers/user.controller";
import { loginRequired } from "../middlewares/authorization.middleware";
import { asyncWrap } from "../middlewares/errorHandler.middlewares";

const userRouter = express.Router();

userRouter.post("/signup", asyncWrap(userContoller.signUp));
userRouter.post("/signin", asyncWrap(userContoller.signIn));
userRouter.patch("/update", loginRequired, asyncWrap(userContoller.updateUser));
userRouter.patch(
  "/seller",
  loginRequired,
  asyncWrap(userContoller.registerSeller)
);
userRouter.delete("", loginRequired, asyncWrap(userContoller.deleteUser));

export { userRouter };
