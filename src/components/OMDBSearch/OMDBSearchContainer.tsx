import React, { useState } from 'react';
import NewQueryForm from './NewOMDBQueryForm';
import OMDBResultDisplay from './OMDBResultDisplay';
import { movieQueryResult } from '../../models/movieQuery';
import './OMDBStyles.scss';

interface IOMDBSearchContProps {

}


const OMDBSearchComponentContainer: React.FunctionComponent<IOMDBSearchContProps> = () => {

    //TODO: Find out how to init query and submitted query at the same time
    const [query, setQuery] = useState({ title: '', score: 0 });
    const [queryResult, setQueryResult] = useState <movieQueryResult | undefined>(undefined);
    const [submittedQuery, setSubmittedQuery] = useState({});


    const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery({ ...query, [e.target.name]: e.target.value })
        console.log(JSON.stringify(query));
    }

    const submitQuery = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const titleForAPI: string = query.title.trim().split(' ').join('+');
        console.log("You submitted this query: " +
            "http://www.omdbapi.com/?t=" + titleForAPI + "&apikey=b9d290f7" +
            " And guessed a score of: " + query.score);

        fetch('http://www.omdbapi.com/?t=' + titleForAPI + '&apikey=b9d290f7')
            .then(res => res.json())
            .then((data) => {
                setQueryResult({
                    title: data.Title, releaseDate: data.Released,
                    metascore: data.Metascore, userScore: query.score
                })
            })
            .catch(console.log)

    }

    return (
        <div id="movie-search-area">
            Search for your movie here:
            <NewQueryForm query={query} onSubmitQuery={submitQuery} onChange={onChangeQuery}></NewQueryForm>
            <OMDBResultDisplay title={queryResult? queryResult.title : ''} 
            metascore={queryResult? queryResult.metascore : 0}
            userScore={queryResult? queryResult.userScore : 0}
            releaseDate={queryResult? queryResult.releaseDate : 'N/A'} />
        </div>
    )
}

export default OMDBSearchComponentContainer;