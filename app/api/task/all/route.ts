import Task from "@models/tasks";
import { connectionDB } from "@utils/database";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    await connectionDB();
    const tasks = await Task.find({});
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.log("error GET :>> ", error);
    return NextResponse.json("Failed to fetch tasks", { status: 500 });
  }
};
