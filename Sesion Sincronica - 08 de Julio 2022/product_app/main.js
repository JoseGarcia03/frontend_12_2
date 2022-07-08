import Products from "./modules/products.js";
import UI from "./modules/ui.js";

const form_product = document.getElementById("form_product");
const product_list = document.getElementById("product_list");
const container = document.getElementById("container");

const url = "http://localhost:3000/products"

document.addEventListener( "DOMContentLoaded", async() => {

    const ui = new UI();

    try {
        const { data } = await ui.getData( url );

        ui.mostrar( data, product_list )

    } catch (error) {
        
    }

} );

form_product.addEventListener( "submit", (e)=> {

    const ui = new UI();

    const name = document.querySelector("#name").value;
    const price = document.querySelector("#price").value;
    const year = document.querySelector("#year").value;

    const product = new Products( name, price, year );
    
    product.postProduct( url, product );

    ui.mostrarMensaje( "Producto agregado con exito", "primary", container );

    e.preventDefault();
} );

product_list.addEventListener( "click", ({ target })=> {
    const product = new Products();
    const ui = new UI();

    if ( target.name === "delete") {
        product.deleteProduct( `${url}/${ target.id }` );

        ui.mostrarMensaje( "Producto eliminado con exito", "info", container)

    }
} );

// const products = axios.create({
//     url: "http://localhost:3000/products",
//     timeout: 1000
// })

// products.get()