"use client";

import { createProduct, FormState } from "@/actions/products";
import { useActionState } from "react";

export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div className="space-y-4">
        <label className="text-black">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
          />
        </label>
        {state.errors.title ? (
          <p className="text-red-900 text-sm">Title Is Required</p>
        ) : (
          ""
        )}
      </div>
      <div className="space-y-4">
        <label className="text-black">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded"
            name="price"
          />
        </label>
        {state.errors.price ? (
          <p className="text-red-900 text-sm">Price Is Required</p>
        ) : (
          ""
        )}
      </div>
      <div className="space-y-4">
        <label className="text-black">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded"
            name="description"
          />
        </label>
        {state.errors.description ? (
          <p className="text-red-900 text-sm">Description Is Required</p>
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
