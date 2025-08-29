import React from "react";

const Products = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;

  if (productId) {
    return (
      <h1>
        You are viewing review {reviewId} of product {productId}{" "}
      </h1>
    );
  }
  return <div>This is the Product Default Page </div>;
};

export default Products;
