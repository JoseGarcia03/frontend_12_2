import { getMethod } from "./get.js";



document.addEventListener( "DOMContentLoaded", async() => {

    try {
        const personajes = await getMethod();
        console.log(personajes);
    } catch ( err ) {
        console.log( err );
    }
} );
