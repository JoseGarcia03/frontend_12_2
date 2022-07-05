import { getMovies } from "../helpers/getMovies.js";

const id = localStorage.getItem('id');
const detImg = document.getElementById('detImg');
const detTitle = document.getElementById('detTitle');
const detOverview = document.getElementById('detOverview');

const url = `https://api.themoviedb.org/3/movie/${id}?language=es-ES&api_key=e3959ef8ff54eac9ace19674cfe2a3ab`

document.addEventListener('DOMContentLoaded', async()=> {
    const img_path = 'https://image.tmdb.org/t/p/original';
    try {
        const data = await getMovies( url );
        const { backdrop_path, title, overview } = data;
        detImg.setAttribute( 'src', img_path + backdrop_path );
        detTitle.textContent = title;
        detOverview.textContent = overview
    } catch (error) {
        console.log(error);
    }
} );