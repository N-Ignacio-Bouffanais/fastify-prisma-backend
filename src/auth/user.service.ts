import { hashPassword } from "../utils/hash";
import { prisma } from "../utils/prisma";
import { CreateUserInput } from "./user.schema";

export async function CreateUser(input: CreateUserInput) {

  const { password, ...rest } = input;

  const hash = await hashPassword(input.password)
  const user = await prisma.user.create({
    data: { ...rest, password:hash},
  });
  return user;
}

export async function LoginUser(){}
