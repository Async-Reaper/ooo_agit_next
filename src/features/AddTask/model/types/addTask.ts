export interface AddTaskType {
  createdAt: Date;
  endDate: Date;
  name: string;
  status: TaskStatus;
  userId: string;
  userName: string;
}

export enum TaskStatus {
  AT_WORK = "at_work",
  FINISH = "finish"
}
