import { movies } from '../Data/movies'

const getById = ( id ) => {
    
    return movies.find( (movie) => movie.id === id );
}

export default getById;