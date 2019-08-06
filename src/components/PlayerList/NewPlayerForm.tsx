import React, {FunctionComponent} from 'react';
import {IPlayer} from '../../models/task';

interface IProps{
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    onChange: (event:  React.ChangeEvent<HTMLInputElement>) => void;
    task: IPlayer;
}

export const NewPlayerForm: FunctionComponent<IProps> = ({
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
        <button type="submit">Add player!</button>
    </form>
)}