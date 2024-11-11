import React, { FC } from "react";
import { List } from "@mui/material";
import { TodoItem } from "../components";

interface IProps {
    tasks: { task: string; completed: boolean }[];
    onToggleTask: (index: number) => void;
    onDeleteTask: (index: number) => void;
}

export const TodoList: FC<IProps> = ({ tasks, onToggleTask, onDeleteTask }) => {
    return (
        <List>
            {tasks.map((task, index) => (
                <TodoItem
                    key={index}
                    task={task.task}
                    completed={task.completed}
                    onToggle={() => onToggleTask(index)}
                    onDelete={() => onDeleteTask(index)}
                />
            ))}
        </List>
    );
};
