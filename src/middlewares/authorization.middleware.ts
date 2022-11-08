import { RequestHandler } from "express";
import { ErrorConstructor as error } from "./errorConstructor.middleware";
import { getUser } from "../services/user.service";
import jwt from "jsonwebtoken";

const loginRequired: RequestHandler = async (req, res, next) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    throw new error("NEED_ACCESS_TOKEN", 400);
  }

  const payload = jwt.verify(
    accessToken,
    process.env.JWT_SECRET as string
  ) as jwt.JwtPayload;

  const user = await getUser(payload.email);

  if (!user) {
    throw new error("INVALID_USER", 404);
  }

  req.user = user;
  next();
};

export { loginRequired };
