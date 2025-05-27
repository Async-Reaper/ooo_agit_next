"use client";
import React, { useEffect } from "react";
import { UserRole } from "@entities/User";
import { AddTaskButton } from "@features/AddTask";
import { TasksList } from "@widgets/TasksList";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const userRole = searchParams?.get("role");

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      router.push("/admin/login");
    }
  }, [router]);

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
