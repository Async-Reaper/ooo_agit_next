import React from "react";
import { AddUserButton } from "@features/AddUser";
import { EmployeesList } from "@widgets/EmployeesList";

const Page = () => {
  return (
    <div>
      <AddUserButton />
      <EmployeesList />
    </div>
  );
};

export default Page;
