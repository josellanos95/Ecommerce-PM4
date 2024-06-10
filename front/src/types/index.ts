export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface LoginProps {
    email: string;
    password: string;
}

export interface RegisterProps {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
}

export interface RegisterErrorprops{
    email?: string;
    password?: string;
    name?: string;
    address?: string;
    phone?: string;
}

export interface userSession {
    token: string;
    userData: {
        address: string;
        email: string;
        id: number;
        name: string;
        phone: string;
        role: string;
        orders: [];
    }   
}

export interface IOrder {
    id: number;
    status: string;
    date: string;
    products: IProduct[];
}