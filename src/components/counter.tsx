"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  //   const { isLoaded, userId, sessionId } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();
  const userObj = useUser();
  //   console.log("This is the Log From The Counter -> ", authObj, userObj);

  if (!isSignedIn || !isLoaded) {
    return null;
  }

  return (
    <>
      <h1>Counter</h1>
      <div>
        <h3>Count is {count} </h3>
        <button onClick={() => setCounter(count + 1)}>Increment +</button>
      </div>
    </>
  );
};

export default Counter;
