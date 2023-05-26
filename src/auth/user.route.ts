import { FastifyInstance } from "fastify"
import { SignUp } from "./user.controller"
import { $ref } from "./user.schema"

async function UserRoute(server: FastifyInstance){
    server.post(
      "/",
      {
        schema: {
          body: $ref("createUserSchema"),
          response: {
            201: $ref("createUserResponseSchema"),
          },
        },
      },
      SignUp
    );
}

export default UserRoute