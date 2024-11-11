import React, { FC, useState } from "react";
import { Container, Typography, Paper, AccordionDetails, AccordionSummary, Accordion } from "@mui/material";
import { TodoList } from "./modules";
import { TodoField, TodosInfo } from "./components";
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { EFilter, ITask } from "./interfaces";
import { dictionary } from "./dictionary";
import { styles } from "./styles";

export const App: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selectTask, setSelectTask] = useState<EFilter>(EFilter.All)
  const [completed, setCompleted] = useState<number>(0);

  const addTask = (task: string) => {
    setTasks([...tasks, { task, completed: false }]);
  };

  const toggleTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    let resultCompleted = 0;
    tasks.forEach(task => {
      if (task.completed) {
        resultCompleted += 1
      }
    })
    setCompleted(resultCompleted)

    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const clearTasks = () => {
    setTasks([]);
  };

  const handleChangeSelect = (name: EFilter) => setSelectTask(name)

  const getTasks = (filter: EFilter) => {
    if (filter === EFilter.Completed) {
      return tasks.filter((task) => task.completed)
    }
    if (filter === EFilter.Active) {
      return tasks.filter((task) => !task.completed)
    }
    return tasks
  }

  return (
    <Container maxWidth="sm">
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h1" align="center" gutterBottom>
          {dictionary.Header}
        </Typography>
        <TodoField onAddTask={addTask} />
        <Accordion sx={styles.accordion}>
          <AccordionSummary
            sx={{ flexDirection: 'row-reverse' }}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="h6" sx={{ margin: 0 }}>
              {selectTask === EFilter.Completed
                ? dictionary.Completed
                : selectTask === EFilter.Active
                  ? dictionary.Active
                  : dictionary.All}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {getTasks(selectTask).length > 0
              ? ((<TodoList
                tasks={getTasks(selectTask)}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
              />
              )) : <Typography align="center">{dictionary.NotFound}</Typography>}
          </AccordionDetails>
        </Accordion>
      </Paper>
      <TodosInfo selectFilter={selectTask} onChangeSelect={handleChangeSelect} countCompleted={completed} onClear={clearTasks} />
    </Container>
  );
};
