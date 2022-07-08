export default class Products {
    constructor( name, price, year ) {
        this.name = name;
        this.price = price;
        this.year = year;
        this.id = crypto.randomUUID();
    }

    async postProduct( url, product ) {
        try {
            await axios.post( url, product );
        } catch ( err ) {
            
        }
    }

    async deleteProduct( url ) {
        try {
            await axios.delete( url );
        } catch ( err ) {
            
        }
    }

}