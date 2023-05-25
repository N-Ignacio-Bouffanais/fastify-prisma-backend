import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUser } from "./user.service";
import { CreateUserInput } from "./user.schema";

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