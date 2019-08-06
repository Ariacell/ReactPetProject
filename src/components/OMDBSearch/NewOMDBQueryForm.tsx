import React, { FunctionComponent } from 'react';
import { movieQuery } from '../../models/movieQuery';

interface IOMDBQueryFormProps {
    onSubmitQuery: (event: React.FormEvent<HTMLFormElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    query: movieQuery;
}

export const NewQueryForm: FunctionComponent<IOMDBQueryFormProps> = ({
    onSubmitQuery,
    onChange,
    query
}) => {

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        onSubmitQuery(e);
    }

    return (
        <form onSubmit={onSubmit}>
            <input name="title" onChange={onChange} value={query.title} />
            <input name="score" onChange={onChange} value={query.score} />
            <button type="submit">GUESS!</button>
        </form>
    )
}

export default NewQueryForm;