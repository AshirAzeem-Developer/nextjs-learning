import { Card } from "@/components/card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <Card>
      <div className="flex flex-col ">
        <h1>Archived Notifications</h1>
        <div>
          <Link href={"/complex-dashboard"}>Default</Link>
        </div>
      </div>
    </Card>
  );
};

export default Notifications;
