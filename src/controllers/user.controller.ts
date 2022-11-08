import { RequestHandler } from "express";
import { SellerDto, SignInDto, SignUpDto, UpdateDto } from "../dto/user.dto";
import * as userService from "../services/user.service";

const signUp: RequestHandler = async (req, res) => {
  const data: SignUpDto = req.body;
  await userService.signUp(data);
  res.status(201).json({ message: "User created" });
};

const signIn: RequestHandler = async (req, res) => {
  const data: SignInDto = req.body;
  const accessToken = await userService.signIn(data);
  res.status(200).json({ accessToken: accessToken });
};

const updateUser: RequestHandler = async (req, res) => {
  const email = req.user?.email as string;
  const data: UpdateDto = req.body;
  await userService.updateUser(email, data);
  res.status(204).send();
};

const registerSeller: RequestHandler = async (req, res) => {
  const email = req.user?.email as string;
  const data: SellerDto = req.body;
  await userService.registerSeller(email, data);
  res.status(204).send();
};

const deleteUser: RequestHandler = async (req, res) => {
  const email = req.user?.email as string;
  await userService.deleteUser(email);
  res.status(204).send();
};

export { signUp, signIn, updateUser, registerSeller, deleteUser };
