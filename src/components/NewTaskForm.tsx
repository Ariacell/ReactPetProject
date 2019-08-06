import React, {FunctionComponent} from 'react';
import {ITask} from '../models/task';

interface IProps{
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    onChange: (event:  React.ChangeEvent<HTMLInputElement>) => void;
    task: ITask;
}

export const NewTaskForm: FunctionComponent<IProps> = ({
    onAdd,
    onChange,
    task
}) => {

    const onAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        onAdd(e);
    }

    return (
    <form onSubmit={onAddTask}>
        <input onChange={onChange} value={task.name} />
        <button type="submit">Add a task</button>
    </form>
)}