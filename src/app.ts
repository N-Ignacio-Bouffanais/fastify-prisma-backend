import fastify from "fastify";
import UserRoute from "./auth/user.route";

const server =  fastify();

async function main(){

    server.register(UserRoute, {prefix: '/api/users'});

    try {
        await server.listen({
            port: 3000,
            host: '0.0.0.0'
        });
        console.log("Server listening on port 3000")
    } catch (e) {
        console.log("Error starting server:", e);
        process.exit(1);
    }
}

main();