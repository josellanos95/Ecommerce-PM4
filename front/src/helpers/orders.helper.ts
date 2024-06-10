const apiUrl = process.env.NEXT_PUBLIC_API_URL;
import { IProduct } from "@/types";
import products from "./products";

export async function createOrder (products: number[], token: string){
    try {
        const response = await fetch(`${apiUrl}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
            body: JSON.stringify({
                products,
            }),
        });
        const orders = await response.json();
        return orders;
    } catch (error: any) {
        throw new Error(error.message);
    }

};

export async function getOrders (token: string){
 try {
    const response = await fetch(`${apiUrl}/users/orders`, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            Authorization: token,
        },
    });
    const orders  = await response.json();
    return orders;

 } catch (error: any) {
    throw new Error(error.message);
    
 }
};