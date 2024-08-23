import { AppDataSource } from "../config/dataSource.mjs";
import { Category } from "../entities/Category.mjs";
import { CategoryRepository } from "../repositories/category.respository.mjs";

interface ICategory {
    name: string;
}

const categoriesToPreLoad: ICategory[] = [
    { name: 'Smartphones' },
    { name: 'Laptops' },
    { name: 'Tablets' },
    { name: 'Headphones' },
    { name: 'Cameras' },
    { name: 'Printers' },
    { name: 'Monitors' },
    { name: 'Storage' },
    { name: 'Accessories' }
];

export const preLoadCategories = async () => {
    const categories = await CategoryRepository.find();
    if (!categories.length) await AppDataSource.createQueryBuilder().insert().into(Category).values(categoriesToPreLoad).execute();
    console.log('Categories preloaded');
}