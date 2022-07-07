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

// Mostrar citas actuales
document.addEventListener( "DOMContentLoaded", async() => {
    try {

        const resp = await fetch( "http://localhost:3000/citas" );
        const citas = await resp.json();

        if (citas.length !== 0 ) {
            citas.forEach( cita => {
                const { name, date, email, desc, id } = cita;
                tbody_citas.innerHTML += `
                <tr>
                    <th scope="row">${ name }</th>
                    <td>${ date }</td>
                    <td>${ email }</td>
                    <td>${ desc }</td>
                    <td>
                        <button id="${ id }" class="btn btn-warning editar">Editar</button>
                        <button id="${ id }" class="btn btn-danger cancelar">Cancelar cita</button>
                    </td>
                </tr>`
            } );
        }
    } catch ( err ) {
        alert( "Servidor no responde, intente mas tarde" );
        console.log( err );
    }
} );

// Agregar nueva cita
form_cita.addEventListener( 'submit', async()=> {
    const cita = {
        name: name.value,
        email: email.value,
        date: date.value,
        desc: desc.value,
        id: crypto.randomUUID()
    };

    try {
        await fetch( "http://localhost:3000/citas", {
            method: "POST",
            body: JSON.stringify( cita ),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            } 
        });

        window.location.reload();

    } catch ( err ) {
        alert( "No se pudo agendar la cita, intente mas tarde" );
        console.log( err );
    };
} );

// Acciónes
document.addEventListener( "click", async({ target }) => {
    // Acción editar cita
    if (target.classList.contains("editar")) {
        try {
            const resp = await fetch( `http://localhost:3000/citas/${ target.id }`);
            const cita = await resp.json();

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

            try {
                await fetch( `http://localhost:3000/citas/${ target.id }`, { method: "DELETE" } );
            } catch ( err ) {
                alert( "Servidor no responde, intente mas tarde" );
                console.log( err );
            };

        }

    }
} );

// Editar cita
btn_save.addEventListener( "click", async() => {
    const cita = {
        name: name.value,
        email: email.value,
        date: date.value,
        desc: desc.value,
    };

    try {
        await fetch( `http://localhost:3000/citas/${ sessionStorage.getItem( "id" ) }`, {
            method: "PUT",
            body: JSON.stringify( cita ),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
        } 
        });

        window.location.reload();

    } catch ( err ) {
        alert( "No se pudo agendar la cita, intente mas tarde" );
        console.log( err );
    };
} );

// Cancelar edicion
btn_skip.addEventListener( "click", ()=> {
    form_cita.reset()

    btn_crear.classList.remove("disabled");
    btn_save.classList.add("disabled");
    btn_skip.classList.add("disabled");
} );