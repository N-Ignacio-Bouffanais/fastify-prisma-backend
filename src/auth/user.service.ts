import { hashPassword } from "../utils/hash";
import prisma from "../utils/prisma";
import { CreateUserInput } from "./user.schema";


export async function CreateUser(input: CreateUserInput) {
  const hash = await hashPassword(input.password)
  const newUser = await prisma.user.create({
    data: {
      email: input.email,
      password: hash,
    },
  });
  return newUser;
}

export async function LoginUser(){}
