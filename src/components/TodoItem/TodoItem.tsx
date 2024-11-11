import React, { FC } from "react";
import { Checkbox, ListItem, ListItemText, ListItemIcon, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styles } from "./styles";

interface IProps {
  task: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export const TodoItem: FC<IProps> = ({ task, completed, onToggle, onDelete }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox checked={completed} onChange={onToggle} />
      </ListItemIcon>
      <ListItemText primary={task} sx={[completed && styles.completed]} />
      <IconButton onClick={onDelete} edge="end">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
