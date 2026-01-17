import { configDotenv } from "dotenv";
import express, { json } from "express";
import todoRoutes from "./routes/todo.routes.js";
import cors from "cors";

configDotenv();

const PORT = process.env.PORT;

const app = express();

app.use(json());

app.use(cors());

app.use("/todo", todoRoutes);

app.listen(PORT, () => console.log("Server is running..."));
