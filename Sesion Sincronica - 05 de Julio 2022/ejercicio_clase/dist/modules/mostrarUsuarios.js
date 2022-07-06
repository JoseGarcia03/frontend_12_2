
export const mostrarUsuarios = ( data, container ) => {
    container.innerHTML = '';

    data.forEach( user => {
         const { nombre, edad, id, email } = user;

         container.innerHTML += `
         <tr>
            <th scope="row">${ id }</th>
            <td>${ nombre }</td>
            <td>${ email }</td>
            <td>${ edad }</td>
            <td>
            <button id='${ id }' class="btn btn-warning editar">Editar</button>
            <button id='${ id }' class="btn btn-danger borrar">Eliminar</button>
            </td>
        </tr>`
    } );
}