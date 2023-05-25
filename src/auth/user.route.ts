import { FastifyInstance } from "fastify"
import { SignUp } from "./user.controller"

async function UserRoute(server: FastifyInstance){
    server.post('/', SignUp)
}

export default UserRoute