import { getProducts } from "@/prisma-db";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();
  console.log("Products Are -> ", products);
  return (
    <ul className="space-y-4 p-4">
      {products.map((product) => {
        return (
          <li
            key={product.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <Link href={`/products-db/${product.id}`}>
              <h1 className="text-xl font-semibold">{product.title}</h1>
            </Link>
            <p>{product.description}</p>
            <p className="text-lg font-medium">{product.price}</p>
          </li>
        );
      })}
    </ul>
  );
}
