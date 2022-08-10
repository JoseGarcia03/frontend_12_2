import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../Firebase/firebaseConfig'
import { citasTypes } from '../Types/citasTypes'



// Añadir una nueva cita
// Metodo add (el id lo genera firebase)
export const addDate = ( cita ) => {
    return (dispatch) => {
        addDoc(collection(db, "citas"), cita)
        .then( (resp) => {
            dispatch( addDateSync( cita ) )
            alert('cita agendada con exito')
        })
    }
}

// Metodo set (el id lo especifico yo)
// export const addDateSet = ( cita, uid ) => {
//     return (dispatch) => {
//         setDoc(doc(db, "citas", uid), cita)
//         .then( (resp) => {
//             dispatch( addDateSync( cita ) )
//             alert('cita agendada con exito')
//         })
//     }
// }

const addDateSync = ( cita ) => ({
    type: citasTypes.add,
    payload: cita
})



// Leer datos
export const readDate = () => {
    return async( dispatch) => {
        try {
            const dates = []
            const resp = await getDocs(collection(db, "citas"))
            resp.forEach( (doc) => dates.push(doc.data()))
            dispatch(readDateSync( dates ))
        } catch ( err ) {
            alert(' Servidor no responde, intente mas tarde')
        }
    }
}

const readDateSync = ( dates ) => ({
    type: citasTypes.read,
    payload: dates
})

// Borrar cita
export const deleteDate = (email) => {
    return async(dispatch) => {
        const q = query( collection(db, 'citas'), where("email", "==", email) );
        const dateRaw = await getDocs(q)
        dateRaw.forEach( async(date) => {
            try {
                await deleteDoc( doc(db, "citas", date.id))
                dispatch(deleteDateSync(email))
            } catch (err) {
                console.log(err);
            }
        })
    }
}

const deleteDateSync = (email) => ({
    type: citasTypes.delete,
    payload: email
})


// Editar cita
export const editDate = ( cita, email ) => {
    return async(dispatch) => {
        const q = query( collection(db, 'citas'), where("email", "==", email) );
        const dateRaw = await getDocs(q)

        let id = ''

        dateRaw.forEach( (date) => {
            id = date.id
        })

        try {
            await updateDoc( doc(db, "citas", id ), cita )
            dispatch( editDateSync( cita ) ) 
        } catch (error) {
            console.log(error);
        }

    }
}

const editDateSync = (cita) => ({
    type: citasTypes.edit,
    payload: cita
})