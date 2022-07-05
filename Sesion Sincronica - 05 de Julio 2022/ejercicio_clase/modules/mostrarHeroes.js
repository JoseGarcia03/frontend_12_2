

export const mostrarHeroes = ( data = [], card, container ) => {

    container.innerHTML = '';

    data.forEach( hero => {
        const { nombre, imagen } = hero;

        card.querySelector('img').setAttribute('src', imagen );
        card.querySelector('a').textContent = nombre;

        const clone = document.importNode( card, true );

        container.appendChild(clone);
    } );
};