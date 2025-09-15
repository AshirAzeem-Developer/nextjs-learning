"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="block w-full p-2 text-black bg-green-500 rounded disabled:bg-gray-500 disabled:text-white "
    >
      Submit
    </button>
  );
};

export default Submit;
