
export const mostrarPeliculas = ( cont, movies = [], template, name = '' ) => {
    const img_path = 'https://image.tmdb.org/t/p/original';
    const posters = template.getElementById('posters');
    posters.innerHTML = '';
    template.querySelector('h2').textContent = name;


    // arreglo que imprime las imagenes de la seccion
    movies.forEach( movie => {
        const { id, poster_path, title } = movie;
        if (poster_path ) {
            posters.innerHTML += `
            <a  class="shrink-0" >
                <img id=${id} class="lg:w-96 sm:w-60 w-44 rounded poster" src="${img_path + poster_path}" alt="${title}">
            </a>
            `;
        }
    } );

    const clone = document.importNode(template, true);

    cont.appendChild( clone );
};