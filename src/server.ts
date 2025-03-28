import { config } from "dotenv";
import Server from "./app/express";
config();




// server running

const expressServer = new Server();
const PORT = process.env.PORT || 3000;
expressServer.start(PORT);

