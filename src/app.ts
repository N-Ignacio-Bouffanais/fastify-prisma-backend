import fastify from "fastify";
import UserRoute from "./auth/user.route";
import { userSchemas } from "./auth/user.schema";

const server =  fastify();
const PORT = Number(process.env.PORT) || 3000;

server.register(require('fastify-jwt'),{
    secret: process.env.JWT_SECRET
});

async function main(){
    for(const schema of userSchemas){
        server.addSchema(schema);
    }

    server.register(UserRoute, {prefix: '/api/users'});

    try {
        await server.listen({
            port: PORT,
            host: '0.0.0.0'
        });
        console.log(`Server listening on port ${PORT}`)
    } catch (e) {
        console.log("Error starting server:", e);
        process.exit(1);
    }
}

main();