//Importamos el modulo con la informacion de los heroes
import { data } from '../data/data.js'
//Importamos el modulo que muestra los heroes
import { showHeroes } from '../modules/printHeros.js'

//Capturamos el area en donde se va inyectar el html con los heroes
const main = document.querySelector('#main')

//Funcion para mostrar los heroes
showHeroes(data, main)

//-- Funcion de buscar

//Capturamos el formulario
const form = document.getElementById('form')

//Escuchamos el evento submit en el formulario
form.addEventListener('submit', (e)=> {
    //Capturamos el evento que hace refrescar la pagina y lo detenemos
    e.preventDefault();

    //Capturamos la palabra escrita en el input
    const search = document.querySelector('#search').value;

    //Usamos un .filter para que nos genere un nuevo array con el resultado de los heroes que correspondan a la busqueda
    const resultado = data.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || heroe.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    //Llamamos a la funcion que pinta en pantalla los heroes pero le pasamos el nuevo array con el resultado de la busqueda
    showHeroes(resultado, main)
})