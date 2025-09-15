"use client";

import { createProduct, editProduct, FormState } from "@/actions/products";
import { useActionState } from "react";
import { Product } from "../page";

export default function EditProductForm({ products }: { products: Product }) {
  const initialState: FormState = {
    errors: {},
  };
  const editProductWithId = editProduct.bind(null, products.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState
  );

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div className="space-y-4">
        <label className="text-black">
          Title
          <input
            defaultValue={products.title ?? ""}
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
          />
        </label>
        {state.errors.title ? (
          <p className="text-red-900 font-bold text-sm">{state.errors.title}</p>
        ) : (
          ""
        )}
      </div>
      <div className="space-y-4">
        <label className="text-black">
          Price
          <input
            defaultValue={products.price ?? ""}
            type="number"
            className="block w-full p-2 text-black border rounded"
            name="price"
          />
        </label>
        {state.errors.price ? (
          <p className="text-red-900 font-bold text-sm">{state.errors.price}</p>
        ) : (
          ""
        )}
      </div>
      <div className="space-y-4">
        <label className="text-black">
          Description
          <textarea
            defaultValue={products.description ?? ""}
            className="block w-full p-2 text-black border rounded"
            name="description"
          />
        </label>
        {state.errors.description ? (
          <p className="text-red-900 font-bold text-sm">{state.errors.price}</p>
        ) : (
          ""
        )}
      </div>
      {/* <Submit /> */}
      <button
        type="submit"
        disabled={isPending}
        className="block w-full p-2 text-black bg-green-500 rounded disabled:bg-gray-500 disabled:text-white "
      >
        Submit
      </button>
    </form>
  );
}
