
function mostrar ( data, container ) {
    data.forEach( elemt => {
        const { name, date, email, desc, id } = elemt;
        container.innerHTML += `
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
};

export default mostrar;