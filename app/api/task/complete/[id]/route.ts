import Task from "@models/tasks";
import { ITaskRequestParams } from "@types";
import { connectionDB } from "@utils/database";
import { NextResponse } from "next/server";

export const PATCH = async (
  request: Request,
  { params }: ITaskRequestParams
) => {
  try {
    await connectionDB();
    const existingTask = await Task.findById(params.id);
    if(!existingTask) {
      return NextResponse.json("Task not found", {status: 404})
    }
    existingTask.completed = !existingTask.completed;
    await existingTask.save();
    return NextResponse.json("Task completed successfully", { status: 200 });
  } catch (error) {
    console.log("error PATCH :>> ", error);
    return NextResponse.json("Failed completing task", { status: 500 });
  }
};
