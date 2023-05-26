import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUser, FindUserByEmail } from "./user.service";
import { CreateUserInput, LoginInput } from "./user.schema";
import { comparePassword } from "../utils/hash";

export async function SignUp(request: FastifyRequest<{
    Body: CreateUserInput
}>, reply: FastifyReply) {
    const body =  request.body;

    try {
        const user = await CreateUser(body)

        return reply.code(201).send(user);
    } catch (e) {
        console.log(e)
        return reply.code(500).send(e)
    }
}

export async function SignIn(
  request: FastifyRequest<{
    Body: LoginInput;
  }>,
  reply: FastifyReply
) {
    const { body } = request
    const user = await FindUserByEmail(body)
    if(!user) {
        return reply.code(404).send({ message: "User not found" })
    }
    const Matchpass = comparePassword(body.password, user.password)

    if(!Matchpass) {
            return reply.code(401).send({ message: "Wrong password" })
        }

}