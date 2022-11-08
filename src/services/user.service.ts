import { SellerDto, SignInDto, SignUpDto, UpdateDto } from "../dto/user.dto";
import { User } from "../schemas/user.schema";
import { ErrorConstructor as error } from "../middlewares/errorConstructor.middleware";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getUser = async (email: string) => {
  const user = await User.findOne({ email: email, deletedAt: null });
  return user;
};

const signUp = async (data: SignUpDto) => {
  const user = await getUser(data.email);
  if (user) {
    throw new error("USER_OVERLAPED", 404);
  }
  const hashedPassword = await bcrypt.hash(data.password, 12);
  return await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    phoneNumber: data.phoneNumber,
    nationality: data.nationality,
  });
};

const signIn = async (data: SignInDto) => {
  const user = await getUser(data.email);
  if (!user) {
    throw new error("USER_NOT_FOUND", 404);
  }
  const checkPassword = await bcrypt.compare(data.password, user.password);
  if (!checkPassword) {
    throw new error("INVALID_PASSWORD", 400);
  }
  const accessToken = jwt.sign(
    { email: user.email },
    process.env.JWT_SECRET as string,
    {
      algorithm: "HS256",
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  return accessToken;
};

const updateUser = async (email: string, data: UpdateDto) => {
  const user = await getUser(email);
  if (!user) {
    throw new error("USER_NOT_FOUND", 404);
  }
  const hashedPassword = await bcrypt.hash(data.password, 12);
  return await User.findOneAndUpdate(
    { email: email },
    {
      $set: {
        name: data.name,
        password: hashedPassword,
        phoneNumber: data.phoneNumber,
        nationality: data.nationality,
      },
    }
  );
};

const registerSeller = async (email: string, data: SellerDto) => {
  const user = await getUser(email);
  if (!user) {
    throw new error("USER_NOT_FOUND", 404);
  }
  if (user.seller) {
    throw new error("RESISTERED_SELLER", 400);
  }
  return await User.findOneAndUpdate(
    { email: email },
    {
      $set: {
        seller: { sellerName: data.sellerName, account: data.account },
      },
    }
  );
};

const deleteUser = async (email: string) => {
  const user = await getUser(email);
  if (!user) {
    throw new error("USER_NOT_FOUND", 404);
  }
  const now = new Date();
  return await User.findOneAndUpdate(
    { email: email },
    { $set: { deletedAt: now } }
  );
};

export { getUser, signUp, signIn, updateUser, registerSeller, deleteUser };
