"use client";
import { getProductByIdDB } from "@/helpers/products.helper";
import { IProduct, userSession } from "@/types";
import React, { useEffect, useState } from "react";
import swal from "sweetalert2";
import ClientRouterComponent from "@/components/ClientRouterComponent/ClientRouterComponent";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProductDetailPage = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState<IProduct>();
  const [userData, setUserData] = useState<userSession>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      if (userData) {
        setUserData(JSON.parse(userData));
      }
    }

    const fetchData = async () => {
      try {
        const product = await getProductByIdDB(params.productId);
        setProduct(product);
      } catch (error: any) {
        console.error("Error al obtener el producto:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.productId]); // Agregado params.productId como dependencia

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!userData?.token) {
      swal.fire(
        "Error",
        "Debes iniciar sesión para agregar productos al carrito",
        "error"
      );
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productExist = cart.some((p: IProduct) => p.id === product?.id);

    if (productExist) {
      swal.fire(
        "Error",
        "El producto ya se encuentra en el carrito",
        "error"
      );
      router.push("/cart");
    } else {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      swal.fire("Éxito", "Producto agregado al carrito", "success");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <div className="text-lg text-blue-700">Cargando...</div>
      </div>
    );
  }

  if (error) {
    return <ClientRouterComponent error={error} />;
  }

  return (
    <div className="bg-blue-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-square w-full">
              <Image
                className="rounded-lg object-contain"
                src={product?.image || "/default-image.jpg"}
                alt={product?.name || "Producto sin nombre"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDARAXFxsdGh0yHR0yPTI4MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {product?.name}
              </h2>
              <p className="text-gray-700 mb-4 flex-grow">{product?.description}</p>
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-bold text-blue-700">
                  ${product?.price}
                </p>
                <p className="text-lg text-green-500">
                  Stock: {product?.stock}
                </p>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;