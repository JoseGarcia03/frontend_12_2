import { getMovies } from "../helpers/getMovies.js";
import { mostrarPeliculas } from "../module/mostrarPeliculas.js";
import { mostrarSlider } from "../module/mostrarSlider.js";

const temPeliculas = document.getElementById('temPeliculas');
const temSlider = document.getElementById('temSlider');
const div = document.getElementById('peliculas');
const slider = document.getElementById('slider');

const section = [{ name: 'Estrenos', path: 'release_date.desc' }, { name: 'Populares', path: 'popularity.desc' }, { name: 'Mas votados', path: 'vote_average.desc' }];

// Accion de obtener las peliculas y series
document.addEventListener('DOMContentLoaded', () => {

    section.forEach( categorie => {
        const url = `https://api.themoviedb.org/3/discover/movie?sort_by=${categorie.path}&language=es-ES&api_key=e3959ef8ff54eac9ace19674cfe2a3ab`;

        // En los estrenos se va a llamar para que se muestre el slider 
        if (categorie.name === 'Estrenos') funcionarSlider( url );


        mostrarSecciones( url, categorie.name );
    });

} );

const funcionarSlider = async( url ) => {
    try {
        const data = await getMovies( url );
        mostrarSlider( temSlider.content, data.results, slider )
    } catch (err) {
        console.log( err );
    };
}


const mostrarSecciones = async( url, name ) => {
    try {
        const data = await getMovies( url );
        mostrarPeliculas( div, data.results, temPeliculas.content, name )
    } catch (err) {
        console.log( err );
    };
}
