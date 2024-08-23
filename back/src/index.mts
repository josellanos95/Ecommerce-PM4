import { PORT } from "./config/envs.mjs";
import app from "./server.mjs";
import "reflect-metadata"
import { AppDataSource } from "./config/dataSource.mjs";
import { preLoadCategories } from "./helpers/preLoadCategories.mjs";
import { preLoadProducts } from "./helpers/preLoadProducts.mjs";

const initialize = async () => {
    console.log("Initializing server");
    await AppDataSource.initialize();
    console.log("Database initialized");
    await preLoadCategories();
    await preLoadProducts();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

initialize();

