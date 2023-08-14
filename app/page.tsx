"use client";
import AddTask from "@/components/AddTask";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { ITask } from "@types";
import NoTask from "@components/NoTask";
import Task from "@components/Task";
import Loading from "@components/Loading";

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleCreateTask = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        body: JSON.stringify({
          task,
        }),
      });
      if (response.ok) {
        setTask("");
        fetchTask();
      } else {
        console.log("Error response handleCreateTask");
      }
    } catch (error) {
      console.log("error handleCreateTask :>> ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompleteTask = async (id: string) => {
    try {
      const response = await fetch(`api/task/complete/${id}`, {
        method: "PATCH",
      });
      if (response.ok) {
        fetchTask();
      } else {
        console.log("Error response handleCompleteTask");
      }
    } catch (error) {
      console.log("error handleCompleteTask :>> ", error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setTaskList((prevTask) =>
          prevTask.filter((task: ITask) => task._id !== id)
        );
      } else {
        console.log("Error response handleDeleteTask");
      }
    } catch (error) {
      console.log("error handleDeleteTask :>> ", error);
    }
  };

  const fetchTask = async () => {
    try {
      const response = await fetch("/api/task/all", {
        method: "GET",
      });
      const data = await response.json();
      setTaskList(data);
    } catch (error) {
      console.log("error fetchTask :>> ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <>
      <Header />
      <Flex direction="column" p="2rem">
        <AddTask
          task={task}
          setTask={setTask}
          handleCreateTask={handleCreateTask}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <Flex direction="column" p="2rem">
            {taskList.length > 0 ? (
              taskList.map((task: ITask) => (
                <Task
                  key={task._id}
                  task={task}
                  handleCompleteTask={handleCompleteTask}
                  handleDeleteTask={handleDeleteTask}
                />
              ))
            ) : (
              <NoTask />
            )}
          </Flex>
        )}
      </Flex>
    </>
  );
}
