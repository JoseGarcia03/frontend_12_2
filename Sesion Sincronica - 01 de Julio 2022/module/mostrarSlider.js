export const mostrarSlider = ( template, movies = [], cont ) => {
    const wrapper = template.getElementById('wrapper');
    const indicators = template.getElementById('indicators');

    const img_path = 'https://image.tmdb.org/t/p/original';

    for (let i = 0; i < 2; i++) {
        const number = Math.floor(Math.random() * (19 - 0) + 0);
        const { backdrop_path } = movies[number];


        wrapper.innerHTML += `
        <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="${i === 0 ? 'active' : ''}">
            <img src="${ img_path + backdrop_path }" class="xl:h-80 lg:h-72 sm:h-56 h-28 object-cover block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
        </div>`

        indicators.innerHTML += `
        <button type="button" class="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="${i === 0 ? true : false}" aria-label="Slide ${(i+1)}" data-carousel-slide-to="${i}"></button>
        `

        // const movie = movies.findIndex( (  ))
    };

    const clone = document.importNode(template, true);

    cont.appendChild( clone );
    
};