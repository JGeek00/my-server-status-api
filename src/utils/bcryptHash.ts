import { compare, genSalt, hash } from "bcrypt";

export const hashPassword = async (pwd: string, nSalt: number) => {
  const salt = await genSalt(nSalt);
  const hashedPwd = await hash(pwd, salt);
  return hashedPwd;
};

export const verifyPassword = async (pwd: string, hash: string) => {
  const result = await compare(pwd, hash);
  return result;
};
