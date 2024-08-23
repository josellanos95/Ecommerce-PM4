import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs.mjs";
import { User } from "../entities/User.mjs";
import { Credential } from "../entities/Credential.mjs";
import { Order } from "../entities/Order.mjs";
import { Category } from "../entities/Category.mjs";
import { Product } from "../entities/Product.mjs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  // dropSchema: true,
  logging: false,
  entities: [User, Credential, Order, Product, Category],
  subscribers: [],
  migrations: [],
});
