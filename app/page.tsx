"use client";
import AddTask from "@/components/AddTask";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { Spinner, Flex } from "@chakra-ui/react";
import { ITask } from "@types";

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
      <AddTask
        task={task}
        setTask={setTask}
        handleCreateTask={handleCreateTask}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <Flex direction="column" alignItems="center">
          {taskList.length > 0 ? (
            taskList.map((task: ITask) => <p key={task._id}>{task.task}</p>)
          ) : (
            <></>
          )}
        </Flex>
      )}
    </>
  );
}
