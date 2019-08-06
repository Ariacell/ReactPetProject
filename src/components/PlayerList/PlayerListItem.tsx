import { IPlayer } from "../../models/task";
import React from 'react';
import { Card, CardContent, Button, GridList, GridListTile } from "@material-ui/core";


interface IProps {
    player: IPlayer;
    onToggleComplete: (task: IPlayer) => void;
    onDelete: (task: IPlayer) => void;
}



export const PlayerListItem: React.FunctionComponent<IProps> = ({ player, onToggleComplete, onDelete }) => {
    const onClickComplete = () => {
        onToggleComplete(player);
        console.log(player.complete);
    };
    const onClickDelete = () => {
        onDelete(player);
    };

    return (
        <Card className={player.name}>
            <CardContent style={{ textDecoration: player.complete ? 'line-through' : 'none' }}>
                <label htmlFor="taskName" id={player.id.toString()}
                    onClick={onClickComplete}>
                    <b>Player# {player.id} </b>
                </label>
                {player.name}
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