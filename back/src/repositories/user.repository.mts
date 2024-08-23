import { AppDataSource } from "../config/dataSource.mjs";
import { User } from "../entities/User.mjs";

export const UserRepository = AppDataSource.getRepository(User);