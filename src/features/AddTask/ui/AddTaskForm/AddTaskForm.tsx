"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { IUser } from "@entities/User";
import { setDoc } from "@firebase/firestore";
import { db } from "@main/FirebaseProvider";
import { Button, Input, Loader, Typography } from "@shared/ui";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useSearchParams } from "next/navigation";

import cls from "./AddTaskForm.module.scss";

import { TaskStatus } from "../../model/types/addTask";


interface ConsultationFormProps {
  close: () => void;
}

const AddTaskForm = React.memo((props: ConsultationFormProps) => {
  const {
    close,
  } = props;

  const [userName, setUserName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const [taskStatus] = useState<TaskStatus>(TaskStatus.AT_WORK);
  const [taskName, setTaskName] = useState<string>("");
  const [isLoadingAddTask, setIsLoadingAddTask] = useState<boolean>(false);
  const [isLoadingEmployeesList, setIsLoadingEmployeesList] = useState<boolean>(false);
  const [endDate, setEndDate] = useState<string>("");
  const [employeesList, setEmployeesList] = useState<IUser[]>([]);
  const searchParams = useSearchParams();
  const employeeId = searchParams?.get("employeeId");
  
  const fetchEmployeesList = useCallback(async () => {
    setIsLoadingEmployeesList(true);
    const responseEmployees = query(collection(db, "users"), where("role", "==", "employee"));
    const querySnapshot = await getDocs(responseEmployees);
    const newItems = querySnapshot.docs.map((doc) => (doc.data() as IUser));
    setEmployeesList(newItems);
    setIsLoadingEmployeesList(false);
  }, []);

  useEffect(() => {
    fetchEmployeesList();
  }, [fetchEmployeesList]);

  useEffect(() => {
    if (employeeId) {
      setUserId(employeeId);
      const foundUser = employeesList.find(employee => employee.id === employeeId);
      setUserName(foundUser?.userName || "");
    }
  }, [employeeId, employeesList]);

  const onHandleChangeUser = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUserId = event.target.value;
    setUserId(selectedUserId);
    const foundUser = employeesList.find(employee => employee.id === selectedUserId);
    setUserName(foundUser?.userName || "");
  }, [employeeId]);
  
  const onHandleAddTask = async () => {
    try {
      setIsLoadingAddTask(true);
      const newTaskData = {
        createdAt: new Date(),
        endDate: new Date(endDate),
        name: taskName,
        status: taskStatus,
        userId,
        userName
      };

      const docRef = await addDoc(collection(db, "tasks"), newTaskData);
      await setDoc(docRef, { id: docRef.id }, { merge: true });

      close();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingAddTask(false);
      setUserId("");
    }
  };

  const disabled = useMemo(
    () => !userName || (!userId || !employeeId) || !taskStatus || !taskName,
    [userName, userId, employeeId, taskStatus, taskName],
  );

  return (
    <div className={cls.add_task__form}>
      <Input fullWidth placeholder="Название задачи:" value={taskName} onChange={setTaskName} />
      <div className={cls.form__input__wrapper}>
        <label htmlFor="endDate">
          <Typography variant="span">
            Выполнить до:
          </Typography>
        </label>
        <Input id="endDate" value={endDate} onChange={setEndDate} fullWidth type="datetime-local"/>
      </div>
      {
        isLoadingEmployeesList && !employeeId
          ? <Loader/>
          : <div className={cls.form__input__wrapper}>
            <label htmlFor="selectUser">
              <Typography variant="span">
                Сотрудник:
              </Typography>
            </label>
            <select id="selectUser" value={userId} defaultValue="Сотрудник" onChange={onHandleChangeUser}>
              <option value="">Сотрудник:</option>
              {
                employeesList.map(employee =>
                  <option key={employee.id} value={employee.id}>
                    <Typography variant="span">
                      {employee.userName}
                    </Typography>
                  </option>
                )}
            </select>
          </div>
      }
      <div className={cls.add_task__button__wrapper}>
        {
          isLoadingAddTask
            ? <Loader/>
            : (
              <Button fullWidth variant="outlined" disabled={disabled} onClick={onHandleAddTask}>
                <Typography variant="span" uppercase>
                  отправить
                </Typography>
              </Button>
            )
        }
      </div>
    </div>
  );
});

export default AddTaskForm;
