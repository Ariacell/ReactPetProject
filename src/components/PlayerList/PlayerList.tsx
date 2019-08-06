import { IPlayer } from "../../models/task";
import React, { FunctionComponent } from "react";
import { PlayerListItem } from "./PlayerListItem";


interface IProps {
    players: IPlayer[];
    onToggleComplete: (task: IPlayer) => void;
    onDelete: (task: IPlayer) => void;
}

export const PlayerList: FunctionComponent<IProps> = ({players, onToggleComplete, onDelete}) => (
       <div> {players.map(player => (
            <PlayerListItem player={player} onToggleComplete={onToggleComplete} onDelete={onDelete} />
        ))}
        </div>
);