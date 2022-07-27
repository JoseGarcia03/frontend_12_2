import { movies } from '../Data/movies';

const getByCategory = ( category ) => {

    const validateCategory = ['senior', 'hobbit']

    if (!validateCategory.includes( category )){
        throw new Error (`La categoria ${ category } no existe`)
    }

    return movies.filter( movie => movie.category === category );

}

export default getByCategory;