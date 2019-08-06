import { NewPlayerForm } from "./NewPlayerForm";
import React, { useState } from "react";
import { IPlayer } from "../../models/task";
import { PlayerList } from "./PlayerList";
import './PlayersContainer.scss';


interface IProps {

};

export const PlayerComponentContainer: React.FunctionComponent<IProps> = () => {

    const [newPlayer, setNewPlayer] = useState<IPlayer>({ id: 0, name: '', complete: false });

    const [players, setPlayers] = useState<IPlayer[]>([]);

    const deleteTask = (taskToDelete: IPlayer) => {
        setPlayers(players.filter(task => task.id !== taskToDelete.id));
    }

    const toggleComplete = (taskToComplete: IPlayer) => {
        setPlayers(players.map(task => {
            if (task.id === taskToComplete.id) {
                return { ...task, complete: !task.complete };
            } else {
                return task;
            }
        }));
    }

    const onChangeNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPlayer({ ...newPlayer, name: e.target.value })
        console.log(JSON.stringify(newPlayer));
    }
    const addNewPlayer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setPlayers([...players, newPlayer]);
        setNewPlayer({ id: newPlayer.id + 1, name: '', complete: false });
    }

    return (
        <div>
            <div id="new-player-form">
                <NewPlayerForm task={newPlayer} onAdd={addNewPlayer} onChange={onChangeNewTask}></NewPlayerForm>
            </div>
            <div id="player-list">
                <PlayerList players={players} onDelete={deleteTask} onToggleComplete={toggleComplete}></PlayerList>
            </div>
        </div>
    );
}