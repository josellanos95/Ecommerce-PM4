import { Router } from "express";
import usersRouter from "./users.router.mjs";
import ordersRouter from "./orders.router.mjs";
import productsRouter from "./products.router.mjs";

const router = Router();

router.use("/users", usersRouter);
router.use("/orders", ordersRouter);
router.use("/products", productsRouter);

export default router;
