import { Router } from "express";
import { getProducts } from "../controllers/product.controller.mjs";

const router = Router();

router.get("/", getProducts);

export default router;
