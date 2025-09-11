import React from "react";
import { Metadata } from "next";

export const dynamicParams = false;

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;
  return {
    title: `Prduct id ${productId}`,
    description: `This is the details of product Id ${productId}`,
  };
};

export async function generateStaticParams() {
  return [{ productId: "1" }, { productId: "2" }, { productId: "3" }];
}

const ProductDescription = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  console.log("Product Description Page CAlled");
  const { productId } = await params;

  if (productId >= "0") {
    return <h1>You are viewing Deatils of product {productId} </h1>;
  }
  return <div>This is the Product Default Page </div>;
};

export default ProductDescription;
