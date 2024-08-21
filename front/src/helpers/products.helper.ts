import { IProduct } from "../types/index";
export const apiUrl = 'http://localhost:3000';

export async function getProductsDB() {
 try {
        const response = await fetch(`${apiUrl}/products`, {
            method: "GET",
            next: {revalidate: 3600}
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products: IProduct[] = await response.json();
        return products;

 } catch (error: any) {
    throw new Error(error);
 }
}

export async function getProductByIdDB(id: string) {
    try {
       const products = await getProductsDB();
       if (!products) {
           throw new Error("No se pudieron obtener los productos");
       }
       const product = products.find((product) => product.id.toString() === id);
       if (!product) throw new Error("Producto no encontrado");
       return product;
    } catch (error: any) {
        throw new Error(error);
    }
};
