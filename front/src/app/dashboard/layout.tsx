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
      <div className="bg-blue-600 py-2">
        <div className="container mx-auto flex items-center justify-end">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/orders">
              <span className="text-white px-4 py-1 rounded-md bg-blue-700 hover:bg-blue-800 transition duration-300 text-sm">
                Órdenes
              </span>
            </Link>
            <Link href="/cart">
              <span className="text-white px-4 py-1 rounded-md bg-red-600 hover:bg-red-700 transition duration-300 text-sm">
                Carrito
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 min-h-screen">
        <div className="container mx-auto py-6">
          {children}
        </div>
      </div>
    </>
  );
}