import { Card } from "@/components/card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <Card>
      Notifications
      <Link
        href={"/complex-dashboard/archived"}
        className="text-blue-800 underline"
      >
        Archived
      </Link>
    </Card>
  );
};

export default Notifications;
