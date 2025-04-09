import { config } from "dotenv";
import Server from "./app/express";
import Database from "./core/database";
config();

const database = new Database(process.env.DATABASE_URL as string);

database.connect();



const expressServer = new Server();
const PORT = process.env.PORT || 3006;
expressServer.start(PORT);

