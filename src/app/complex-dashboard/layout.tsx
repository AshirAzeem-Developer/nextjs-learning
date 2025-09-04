import React from "react";

const ComplexDashboardLayout = ({
  children,
  revenue,
  users,
  notifications,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
}) => {
  return (
    <div>
      {children}
      <div className="flex flex-row ">
        <div className="flex flex-col">
          {revenue}
          {users}
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  );
};

export default ComplexDashboardLayout;
