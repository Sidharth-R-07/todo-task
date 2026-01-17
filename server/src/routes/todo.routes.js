import express from "express";
import { addTodo, getTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/add", addTodo);

router.get("/get", getTodo);

export default router;
