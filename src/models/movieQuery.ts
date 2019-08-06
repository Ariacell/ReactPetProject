export interface movieQuery {
    title: string,
    score: number,
    //options...
}

export interface movieQueryResult {
    title: string,
    releaseDate: string,
    // ratings: [{
    //     source: string,
    //     rating: string
    // }],
    metascore: number,
    userScore: number,
}
