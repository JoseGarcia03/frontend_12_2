export function showHeroes(heroes, main) {

    main.innerHTML = '';

    heroes.forEach((heroe)=> {
        
        const movieEl = document.createElement('div') //Creamos un elemento div
        movieEl.classList.add('movie') // Al elemento que acabamos de crear le agregador una clase llamada movie

        //Inyectamos HTML al DIV que acabamos de crear
        movieEl.innerHTML = `
            <img src="${heroe.image}" alt="${heroe.name}">
            <div class="movie-info">
                <h3>${heroe.name}</h3>
                <span class="green">0.9</span>
            </div>
            <div class="overview">
                <h3>overview</h3>
                ${heroe.first_appearance}
            </div>
        `

        main.appendChild(movieEl)
    })
}