import { RegisterProps, LoginProps } from "@/types";
import swal from 'sweetalert2';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;


export async function register (userData: RegisterProps) {
    try {
        const res = await fetch(`${apiUrl}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }) 
        if (res.ok) {
            swal.fire('Alert', 'Usuario registrado correctamente', 'success')
            return await res.json()
        } else {
            swal.fire("Fallo al registrarse")
            throw new Error("Fallo al registrarse")
        }
    } catch (error: any) {
        throw new Error(error.message)  
    }
};

export async function login (userData: LoginProps) {
    try {
        const res = await fetch(`${apiUrl}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }) 
        if (res.ok) {
            swal.fire('Alert', 'Sesión iniciada correctamente', 'success')
            return await res.json()
        } else {
            swal.fire("Fallo al iniciar sesión")
            throw new Error("Fallo al iniciar sesión")
        }
    } catch (error: any) {
        throw new Error(error.message)  
    }
};