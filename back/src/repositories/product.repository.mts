import { AppDataSource } from "../config/dataSource.mjs";
import { Product } from "../entities/Product.mjs";

export const ProductRepository = AppDataSource.getRepository(Product);