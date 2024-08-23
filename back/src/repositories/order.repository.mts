import { AppDataSource } from "../config/dataSource.mjs";
import { Order } from "../entities/Order.mjs";

export const OrderRepository = AppDataSource.getRepository(Order);
