// import { notFound } from "next/navigation";
"use client";

import React from "react";

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) => {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    // return notFound();
    throw new Error("Id Should be Less than 1000");
  }
  return (
    <div>
      This is the {reviewId} review of Product {productId}
    </div>
  );
};

export default ReviewDetails;
