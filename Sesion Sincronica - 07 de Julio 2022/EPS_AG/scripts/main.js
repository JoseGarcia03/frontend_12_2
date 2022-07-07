import { deletee, get, post, put } from "../helpers/crud.js";
import mostrar from "../modules/mostar_tabla.js";

// Variables
const form_cita = document.getElementById('form_cita');
const name = document.getElementById('name');
const email = document.getElementById('email');
const date = document.getElementById('date');
const desc = document.getElementById('desc');
const btn_crear = document.getElementById('btn_crear');
const btn_save = document.getElementById('btn_save');
const btn_skip = document.getElementById('btn_skip');

const tbody_citas = document.getElementById('tbody_citas');

const url = "http://localhost:3000/citas/"

// Mostrar citas actuales
document.addEventListener( "DOMContentLoaded", async() => {
    try {
        const citas = await get( url );
        if (citas.length !== 0 ) {
            mostrar( citas, tbody_citas )
        }
    } catch ( err ) {
        console.log( err );
        alert( "Servidor no responde, intente mas tarde" );
    }
} );

// Agregar nueva cita
form_cita.addEventListener( 'submit', async( e )=> {

    e.preventDefault();
    
    const cita = {
        name: name.value,
        email: email.value,
        date: date.value,
        desc: desc.value,
        id: crypto.randomUUID()
    };

    post( url, cita );

} );

// Acciónes
document.addEventListener( "click", async({ target }) => {
    // Acción editar cita
    if (target.classList.contains("editar")) {
        try { 
            const cita = await get( url + target.id );

            const { name:nombre, email:correo, date:fecha, desc:descripcion } = cita;
            name.value = nombre;
            email.value = correo;
            date.value = fecha;
            desc.value = descripcion;

            sessionStorage.setItem( "id", target.id );

            btn_crear.classList.add("disabled");
            btn_save.classList.remove("disabled");
            btn_skip.classList.remove("disabled");

        } catch ( err ) {
            alert( "Servidor no responde, intente mas tarde");
            console.log( err );
        }
    }

    // Cancelar cita
    if (target.classList.contains("cancelar")) {

        if (window.confirm( "Seguro que desea cancelar la cita, esta accion no se puede deshacer" )) {
            deletee( url + sessionStorage.getItem("id") );
        }
    }
} );

// Editar cita
btn_save.addEventListener( "click", async() => {
    const cita = {
        name: name.value,
        email: email.value,
        date: date.value,
        desc: desc.value
    };

    put( url + sessionStorage.getItem("id"), cita );

} );

// Cancelar edicion
btn_skip.addEventListener( "click", ()=> {
    form_cita.reset()

    btn_crear.classList.remove("disabled");
    btn_save.classList.add("disabled");
    btn_skip.classList.add("disabled");
} );