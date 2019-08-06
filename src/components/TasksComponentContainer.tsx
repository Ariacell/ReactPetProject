import { NewTaskForm } from "./NewTaskForm";
import React, { useState } from "react";
import { ITask } from "../models/task";
import { TaskList } from "./TaskList";


interface IProps {

};

export const TaskComponentContainer: React.FunctionComponent<IProps> = () => {

    const [newTask, setNewTask] = useState<ITask>({ id: 0, name: '', complete: false });

    const [tasks, setTasks] = useState<ITask[]>([]);

    const deleteTask = (taskToDelete: ITask) => {
        setTasks(tasks.filter(task => task.id !== taskToDelete.id));
    }

    const toggleComplete = (taskToComplete: ITask) => {
        setTasks(tasks.map(task => {
            if (task.id === taskToComplete.id) {
                return { ...task, complete: !task.complete };
            } else {
                return task;
            }
        }));
    }

    const onChangeNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask({ ...newTask, name: e.target.value })
        console.log(JSON.stringify(newTask));
    }
    const addNewTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setTasks([...tasks, newTask]);
        setNewTask({ id: newTask.id + 1, name: '', complete: false });
    }

    return (
        <div>
                <NewTaskForm task={newTask} onAdd={addNewTask} onChange={onChangeNewTask}></NewTaskForm>
                <TaskList tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete}></TaskList>
        </div>
    );
}