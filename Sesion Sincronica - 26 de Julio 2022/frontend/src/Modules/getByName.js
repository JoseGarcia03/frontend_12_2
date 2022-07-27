import { movies } from '../Data/movies';


const getByName = ( name = '' ) => {
    name = name.toLocaleLowerCase();

    return movies.filter( (movie) => movie.name.toLocaleLowerCase()
        .includes(name) );
}

export default getByName;