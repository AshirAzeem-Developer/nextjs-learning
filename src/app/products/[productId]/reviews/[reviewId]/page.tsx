import { notFound } from "next/navigation";
import React from "react";

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) => {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    return notFound();
  }
  return (
    <div>
      You are viewing Details Product {productId} having deatils of review{" "}
      {reviewId}
    </div>
  );
};

export default ReviewDetails;
