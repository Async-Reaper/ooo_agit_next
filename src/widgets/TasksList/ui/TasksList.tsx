"use client";
import React, { useCallback, useEffect, useState } from "react";
import { UserRole } from "@entities/User";
import { TaskStatus } from "@features/AddTask";
import { UpdateTaskButton } from "@features/UpdateTask";
import { db } from "@main/FirebaseProvider";
import { classNames } from "@shared/libs/classNames/classNames";
import { Loader, Typography } from "@shared/ui";
import { collection, onSnapshot, Query, query, Timestamp, where } from "firebase/firestore";
import { useSearchParams } from "next/navigation";

import cls from "./TasksList.module.scss";

import { ITask } from "../model/types/tasksList";

export const TasksList = React.memo(() => {
  const [tasksList, setTasksList] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const userRole = searchParams?.get("role");
  const statusTask = searchParams?.get("tasks");
  const employeeId = searchParams?.get("employeeId");
  const nowTimestamp = Timestamp.now();

  const request = (): Query => {
    if (userRole === UserRole.ADMIN && employeeId && !statusTask) {
      return query(collection(db, "tasks"),
        where("userId", "==", employeeId),
      );
    }

    if (userRole === UserRole.ADMIN && employeeId && statusTask === TaskStatus.AT_WORK) {
      return query(collection(db, "tasks"),
        where("userId", "==", employeeId),
        where("status", "==", statusTask),
        where("endDate", ">", nowTimestamp)
      );
    }

    if (userRole === UserRole.ADMIN && employeeId && statusTask === TaskStatus.FINISH) {
      return query(collection(db, "tasks"),
        where("userId", "==", employeeId),
        where("status", "==", statusTask),
      );
    }

    if (userRole === UserRole.ADMIN && employeeId && statusTask === "expired") {
      return query(collection(db, "tasks"),
        where("userId", "==", employeeId),
        where("status", "!=", TaskStatus.FINISH),
        where("endDate", "<", nowTimestamp)
      );
    }

    if (userRole === UserRole.ADMIN) {
      return query(collection(db, "tasks"));
    }

    if (userRole !== UserRole.ADMIN && statusTask === TaskStatus.AT_WORK) {
      return query(collection(db, "tasks"),
        where("userId", "==", localStorage.getItem("userId")),
        where("status", "==", statusTask),
        where("endDate", ">", nowTimestamp)
      );
    }

    if (userRole !== UserRole.ADMIN && statusTask) {
      return query(collection(db, "tasks"),
        where("userId", "==", localStorage.getItem("userId")),
        where("status", "==", statusTask)
      );
    }

    return query(collection(db, "tasks"), where("userId", "==", localStorage.getItem("userId")));
  };

  const fetchTasksList = useCallback(() => {
    setIsLoading(true);

    const unsubscribe = onSnapshot(request(), (snapshot) => {
      const updatedTasks: ITask[] = [];

      snapshot.forEach((doc) => {
        updatedTasks.push(doc.data() as ITask);
      });
      setTasksList(updatedTasks);
      setIsLoading(false);
    }, (error) => {
      console.error("Ошибка подписки на обновления:", error);
    });

    return () => unsubscribe();

  }, [statusTask, userRole]);

  useEffect(() => {
    fetchTasksList();
  }, [fetchTasksList]);

  const formatDate = (timestampSeconds: number): string => {
    const date = new Date(timestampSeconds * 1000); // секунды → миллисекунды

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  return (
    <div className={cls.tasks__list__wrapper}>
      {
        isLoading 
          ? <Loader />
          : tasksList.length === 0 ?
            <div className={cls.tasks__empty__wrapper}>
              <Typography variant="h1" uppercase>
                Задач нет
              </Typography>
            </div>
            : tasksList.map((task) =>
              <div key={task.id} className={cls.task__wrapper}>
                <div className={cls.task__name}>
                  <Typography variant="p">
                    {task.name}
                  </Typography>
                </div>
                <div className={cls.task__info}>
                  {
                    (task.status === TaskStatus.AT_WORK && (Number((Date.now() / 1000)) < task.endDate.seconds)) &&
                    <div className={classNames(cls.task__status, {}, [cls.at__work])}>
                      <Typography variant="span">
                        В работе
                      </Typography>
                    </div>
                  }
                  {
                    task.status === TaskStatus.FINISH &&
                    <div className={classNames(cls.task__status, {}, [cls.finish])}>
                      <Typography variant="span">
                        Завершена
                      </Typography>
                    </div>
                  }
                  {
                    ((Number((Date.now() / 1000)) > task.endDate.seconds) && task.status !== TaskStatus.FINISH) &&
                    <div className={classNames(cls.task__status, {}, [cls.expired])}>
                      <Typography variant="span">
                        Просрочено
                      </Typography>
                    </div>
                  }
                  <div>
                    <Typography>
                      Исполнитель: {task.userName}
                    </Typography>
                  </div>
                  <div className={cls.task__dates}>
                    <div>
                      <Typography>
                        Дата создания: {formatDate(task.createdAt.seconds)}
                      </Typography>
                    </div>
                    {
                      task.dateFinish
                        ? <div>
                          <Typography>
                            Выполнено: {formatDate(task.endDate.seconds)}
                          </Typography>
                        </div>
                        : <div>
                          <Typography>
                            Выполнить до: {formatDate(task.endDate.seconds)}
                          </Typography>
                        </div>
                    }
                  </div>
                  {
                    (userRole !== UserRole.ADMIN && task.status !== TaskStatus.FINISH) &&
                    <div>
                      <UpdateTaskButton taskId={task.id} />
                    </div>
                  }
                </div>
              </div>
            )
      }
    </div>
  );
});
