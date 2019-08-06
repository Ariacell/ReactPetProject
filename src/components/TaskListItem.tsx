import { ITask } from "../models/task";
import React from 'react';
import { Card, CardContent, Button, GridList, GridListTile } from "@material-ui/core";


interface IProps {
    task: ITask;
    onToggleComplete: (task: ITask) => void;
    onDelete: (task: ITask) => void;
}



export const TaskListItem: React.FunctionComponent<IProps> = ({ task, onToggleComplete, onDelete }) => {
    const onClickComplete = () => {
        onToggleComplete(task);
        console.log(task.complete);
    };
    const onClickDelete = () => {
        onDelete(task);
    };

    return (
        <Card className={task.name}>
            <CardContent style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>
                <label htmlFor="taskName" id={task.id.toString()}
                    onClick={onClickComplete}>
                    <b>#{task.id} </b>
                </label>
                Task name: {task.name}
                <GridList cols={2}>
                <GridListTile>
                        <Button variant="contained" onClick={onClickComplete} color="primary" >Complete Task</Button>
                    </GridListTile>
                    <GridListTile>
                        <Button variant="contained" onClick={onClickDelete} color="secondary">Delete Task</Button>
                    </GridListTile>
                </GridList>
            </CardContent>
        </Card>
    )
};