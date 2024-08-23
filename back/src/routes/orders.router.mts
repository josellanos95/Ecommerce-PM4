import { Router } from "express";
import validateOrderCreate from "../middlewares/orderCreate.middleware.mjs";
import { createOrder } from "../controllers/order.controller.mjs";
import checkLogin from "../middlewares/checkLogin.middleware.mjs";

const ordersRouter = Router();

ordersRouter.post("/", checkLogin, validateOrderCreate, createOrder);

export default ordersRouter;
