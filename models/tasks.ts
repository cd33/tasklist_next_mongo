import { ITask } from "@types";
import { Schema, model, models } from "mongoose";

const taskSchema = new Schema<ITask>({
  task: {
    type: String,
    required: [true, "Task required"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = models.Task || model<ITask>('Task', taskSchema)

export default Task