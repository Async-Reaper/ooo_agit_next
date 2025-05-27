export enum EmployeesStatus {
  AT_WORK = "at_work",
  FINISH = "finish"
}

export interface IEmployees {
  id: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  name: string;
  status: EmployeesStatus;
  userId: string;
  userName: string;
}
