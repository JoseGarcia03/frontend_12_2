class Pelicula {
    constructor( title, year ) {
        this.title = title;
        this.year = year;
    }
    
    reproducir( ) {
        return `Reproduciendo pelicula ${this.title}`
    }
}


const movie = new Pelicula( "Titanic", 2000 );

console.log(movie);


class Series extends Pelicula {
    constructor( title, year, cap, temp ) {
        super( title, year );
        this.capitulos = cap;
        this.temporadas = temp;
    }

    reproducir () {
        return `Reproduciendo serie ${this.title}`
    }
}

const serie = new Series( "iCarly", 1999, 55, 4 );

console.log(serie);