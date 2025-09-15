import { notFound } from "next/navigation";
import { Product } from "../page";
import EditProductForm from "./product-edit-form";
import { getProduct } from "@/prisma-db";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productsList: Product | null = await getProduct(parseInt(id));

  if (!productsList) {
    return notFound();
  }

  return <EditProductForm products={productsList} />;
}
