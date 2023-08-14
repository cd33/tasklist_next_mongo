import { ReactNode } from "react";

export interface AddTaskProps {
  task: string;
  setTask: (task: string) => void;
  handleCreateTask: () => void;
}

export interface ITask {
  _id: string;
  task: string;
  completed: boolean;
}

export interface TaskProps {
  task: ITask;
  handleCompleteTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export interface ITaskRequestParams {
  params: {
    id: string;
  };
}

export interface LayoutProps {
  children: ReactNode;
}
