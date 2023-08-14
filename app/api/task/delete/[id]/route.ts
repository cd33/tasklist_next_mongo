import Task from "@models/tasks";
import { ITaskRequestParams } from "@types";
import { connectionDB } from "@utils/database";
import { NextResponse } from "next/server";

export const DELETE = async (
  request: Request,
  { params }: ITaskRequestParams
) => {
  try {
    await connectionDB();
    await Task.findByIdAndRemove(params.id);
    return NextResponse.json("Task deleted successfully", { status: 200 });
  } catch (error) {
    console.log("error DELETE :>> ", error);
    return NextResponse.json("Failed deleting task", { status: 500 });
  }
};
