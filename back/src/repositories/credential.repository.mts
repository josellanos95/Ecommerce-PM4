import { AppDataSource } from "../config/dataSource.mjs";
import { Credential } from "../entities/Credential.mjs";

export const CredentialRepository = AppDataSource.getRepository(Credential);