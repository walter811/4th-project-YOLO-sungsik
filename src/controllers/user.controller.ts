import { RequestHandler } from "express";
import { UserInputDto } from "../dto/user.dto";
import * as userService from "../services/user.service";

const signIn: RequestHandler = async (req, res) => {
  const data: UserInputDto = req.body;
  await userService.signIn(data);
  return res.status(201).json({ message: "User created" });
};

export { signIn };
