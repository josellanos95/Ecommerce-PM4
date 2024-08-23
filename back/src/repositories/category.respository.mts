import { AppDataSource } from "../config/dataSource.mjs";
import { Category } from "../entities/Category.mjs";

export const CategoryRepository = AppDataSource.getRepository(Category);