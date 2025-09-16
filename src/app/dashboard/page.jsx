import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import Counter from "../../components/counter";
export default async function Dashboard() {
  const authObj = await auth();
  const userObj = await currentUser();
  console.log(authObj, userObj);
  return (
    <div>
      This is dashboard page now accessible
      <Counter />
    </div>
  );
}
