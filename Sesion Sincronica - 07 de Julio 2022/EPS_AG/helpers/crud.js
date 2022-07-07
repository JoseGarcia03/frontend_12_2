
async function get ( url ) {
    try {
        const resp = await fetch( url );
        const data = await resp.json();
        return data;
    } catch ( err ) {
        throw err
    }
}


async function post ( url, cita ) {
    try {
        await fetch( url, {
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
}

const deletee = async( url ) => {
    try {
        await fetch( url , { method: "DELETE" } );
    } catch ( err ) {
        alert( "Servidor no responde, intente mas tarde" );
        console.log( err );
    };
}

const put = async ( url, cita ) => {
    try {
        await fetch( url , {
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
}

export {
    get,
    post,
    deletee,
    put
}