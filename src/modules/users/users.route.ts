import { FastifyInstance } from "fastify";
import RegisterUserHandler from "./users.controller";

async function UserRoute(server: FastifyInstance) {
    server.post('/', RegisterUserHandler);
    
}

export default UserRoute;