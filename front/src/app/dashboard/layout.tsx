import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex items-center justify-end">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/orders">
              <span className="text-white px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition duration-300">
                Órdenes
              </span>
            </Link>
            <Link href="/cart">
              <span className="text-white px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition duration-300">
                Carrito
              </span>
            </Link>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}