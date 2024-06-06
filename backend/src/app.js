import express from "express";
import cors from "cors";
import { usersRouter } from "./routes/users.routes.js";

const app = express();
app.use(express.json());
const corsOptions = {
    origin: '*', // o '*' para permitir desde cualquier origen
};

app.use(cors(corsOptions)); // declaro politicas de cors

app.use(`/api/users`, usersRouter.router)

export default app;