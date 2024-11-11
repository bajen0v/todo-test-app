import React, { FC, useState } from "react";
import { TextField, Button } from "@mui/material";

interface IProps {
  onAddTask: (task: string) => void;
}

export const TodoField: FC<IProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddClick = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <div>
      <TextField
        label="New Task"
        variant="outlined"
        value={task}
        onChange={handleChange}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={handleAddClick}
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Add Task
      </Button>
    </div>
  );
};
