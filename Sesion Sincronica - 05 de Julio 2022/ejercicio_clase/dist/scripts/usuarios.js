import { borrarUser, editarUser, postUser } from "../helpers/crudUser.js";
import { getHeroes } from "../helpers/getHeroes.js";
import { mostrarUsuarios } from "../modules/mostrarUsuarios.js";

const tbody = document.getElementById('tbody');

const form = document.getElementById('form');
const nombre = document.getElementById('inp_nombre');
const email = document.getElementById('inp_email');
const edad = document.getElementById('inp_edad');
const btn_crear = document.getElementById('btn_crear');
const btn_guardar = document.getElementById('btn_guardar');

const URL_USERS ='http://localhost:3000/users';

document.addEventListener( 'DOMContentLoaded', async() => {
    try {
        const users = await getHeroes( URL_USERS );
        mostrarUsuarios( users, tbody );
    } catch ( err ) {
        console.log( err );
    };
} );


form.addEventListener( 'submit', (event) => {
    event.preventDefault();
    
    const user = {
        nombre: nombre.value,
        email: email.value,
        edad: edad.value,
        id: crypto.randomUUID()
    };

    postUser( user )
} );


document.addEventListener( 'click', async({ target }) => {
    if (target.classList.contains('editar')) {

        btn_crear.disabled = true;
        btn_guardar.removeAttribute('disabled');

        try {
            const user = await getHeroes( URL_USERS + `/${ target.id }` );

            const { nombre:name, email:correo, edad:age } = user;

            nombre.value = name;
            edad.value = age;
            email.value = correo;
            sessionStorage.setItem( 'id', target.id );

        } catch ( err ) {
            console.log( err );
        }
    }

    if (target.classList.contains('borrar')) {
        borrarUser( URL_USERS + `/${ target.id }` )
    }
} );

btn_guardar.addEventListener( 'click', () => {

    const user = {
        nombre: nombre.value,
        email: email.value,
        edad: edad.value,
    };

    editarUser( user, URL_USERS + `/${ sessionStorage.getItem('id') }` )

} );