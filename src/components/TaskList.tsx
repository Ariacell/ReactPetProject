import { ITask } from "../models/task";
import React, { FunctionComponent } from "react";
import { TaskListItem } from "./TaskListItem";


interface IProps {
    tasks: ITask[];
    onToggleComplete: (task: ITask) => void;
    onDelete: (task: ITask) => void;
}

export const TaskList: FunctionComponent<IProps> = ({tasks, onToggleComplete, onDelete}) => (
       <div> {tasks.map(task => (
            <TaskListItem task={task} onToggleComplete={onToggleComplete} onDelete={onDelete} />
        ))}
        </div>
);