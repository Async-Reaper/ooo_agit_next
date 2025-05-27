export interface IUser {
  email: string
  id: string
  role: UserRole
  userName: string
}

export enum UserRole {
  ADMIN = "admin",
  EMPLOYEE = "employee"
}
