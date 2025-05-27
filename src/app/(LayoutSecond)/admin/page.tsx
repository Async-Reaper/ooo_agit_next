"use client";
import React from "react";
import { UserRole } from "@entities/User";
import { AddTaskButton } from "@features/AddTask";
import { TasksList } from "@widgets/TasksList";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const userRole = searchParams?.get("role");
  
  return (
    <div>
      {
        userRole === UserRole.ADMIN &&
        <AddTaskButton />
      }
      <TasksList />
    </div>
  );
};

export default Page;
