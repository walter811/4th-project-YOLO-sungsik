import { UserInputDto } from "../dto/user.dto";
import { User } from "../schemas/user.schema";
import { ErrorConstructor as error } from "../middlewares/errorConstructor.middleware";
import * as bcrypt from "bcrypt";

const getUser = async (email: string) => {
  const [user] = await User.find({ email: email });
  return user;
};

const signUp = async (data: UserInputDto) => {
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

export { signUp };
