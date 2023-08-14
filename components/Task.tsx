import { CheckCircleIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Button, Card, Flex, Text } from "@chakra-ui/react";
import { TaskProps } from "@types";
import React from "react";

const Task = ({ task, handleCompleteTask, handleDeleteTask }: TaskProps) => {
  return (
    <Card p="2rem" mb="0.5rem" variant="outline">
      <Flex alignItems="center">
        {task.completed ? (
          <Text flexGrow="1" as="del">
            {task.task}
          </Text>
        ) : (
          <Text flexGrow="1">{task.task}</Text>
        )}
        <Button
          ml="1rem"
          colorScheme={task.completed ? "blue" : "whatsapp"}
          onClick={() => handleCompleteTask(task._id)}
        >
          {task.completed ? <CheckCircleIcon /> : <CheckIcon />}
        </Button>
        <Button
          ml="1rem"
          colorScheme="red"
          onClick={() => handleDeleteTask(task._id)}
        >
          <DeleteIcon />
        </Button>
      </Flex>
    </Card>
  );
};

export default Task;
