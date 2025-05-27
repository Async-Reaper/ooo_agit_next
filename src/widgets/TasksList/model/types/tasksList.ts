import { TaskStatus } from "@features/AddTask";

export interface ITask {
  id: string;
  createdAt: DateTask;
  endDate: DateTask;
  dateFinish?: DateTask;
  name: string;
  status: TaskStatus;
  userId: string;
  userName: string;
}

interface DateTask {
  seconds: number;
  nanoseconds: number;
}
