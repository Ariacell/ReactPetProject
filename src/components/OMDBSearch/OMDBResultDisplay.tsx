import React, { FunctionComponent } from 'react';
import { Card, Grid } from '@material-ui/core';
import { movieQueryResult } from '../../models/movieQuery';


export const OMDBResultDisplay: React.FunctionComponent<movieQueryResult> = (props: movieQueryResult) => {

    const scoreDiff = Math.abs(props.metascore - props.userScore);
    var message: string = '';
    if (props.metascore - props.userScore < -10) {
        message = 'That was a bit optimistic!'
    }
    console.log(JSON.stringify(props));
    return (
        <Grid id="results-container" container>
            <Grid item sm={4}>
                <Card>
                    OMDBResults go here!<br />
                    <span id="movie-title-display"> Title: {props.title} </span><br />
                    <span id="movie-releaseDate-display"> Released: {props.releaseDate} </span><br />
                    <span id="movie-metascore-display"> MetaScore: {props.metascore} </span>
                </Card>
            </Grid>
            <Grid item sm={4}>
                <Card>
                    You guessed {props.userScore}, {message}<br />
                    <span id="final-score-display"> Score: {scoreDiff} </span><br />
                    Points.
            </Card>
            </Grid>
        </Grid>
    )
}


export default OMDBResultDisplay;