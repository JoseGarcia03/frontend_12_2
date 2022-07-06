const URL_USER = 'http://localhost:3000/users'

export const postUser = async user => {
    try {
        await fetch( URL_USER, {
            method: 'POST',
            body: JSON.stringify( user ),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            } 
        } )
    } catch ( err ) {
        throw err
    }
}

export const editarUser = async( user, url_id ) => {
    try {
        await fetch( url_id, {
            method: 'PATCH',
            body: JSON.stringify( user ),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            } 
        } )
    } catch ( err ) {
        throw err
    }
}

export const borrarUser = async url_id  => {
    try {
        await fetch( url_id, { method: 'DELETE' } );
    } catch ( err ) {
        throw err
    }
}