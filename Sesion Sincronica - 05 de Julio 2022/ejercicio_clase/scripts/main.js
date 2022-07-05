import { getHeroes } from "../helpers/getHeroes.js";
import { mostrarHeroes } from "../modules/mostrarHeroes.js";

const URL = 'http://localhost:3000'
const btn_marvel = document.getElementById('btn_marvel');
const card_heroe = document.getElementById('card_heroe').content;
const container_heores = document.getElementById('container_heroes')

// Boton de marvel
btn_marvel.addEventListener( 'click', async() => {
    try {
        const heroes = await getHeroes( URL + '/marvel' );
        mostrarHeroes( heroes, card_heroe, container_heores );
    } catch (err) {
        console.log( err );
    }
} );

// Boton de dc
document.getElementById('btn_dc').addEventListener( 'click', async() => {
    try {
        const heroes = await getHeroes( URL + '/dc' );
        mostrarHeroes( heroes, card_heroe, container_heores );
    } catch (err) {
        console.log( err );
    }
} );