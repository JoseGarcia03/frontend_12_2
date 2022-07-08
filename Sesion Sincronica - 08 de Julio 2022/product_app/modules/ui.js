export default class UI {

    async getData ( url ) {
        try {
            // const resp = await fetch( url );
            // const data = await resp.json();

            
            return await axios.get( url );

        } catch ( err ) {

        }
    }

    mostrar( products, container ) {
        products.forEach( (product) => {
            
            const { name, price, year, id } = product;

            const div = document.createElement("div");
            div.classList.add("card", "mb-4", "text-center");

            
    
            div.innerHTML = `
            <div class="card-body">
                <strong>Producto</strong>: ${ name }
                <strong>Precio</strong>: ${ price }
                <strong>Caducidad</strong>: ${ year }
                <a id="${ id }" href="#" class="btn btn-danger" name="delete">Borrar</a>
            </div>
            `;

            container.appendChild( div );
        })
    }


    mostrarMensaje( msj, cssClass, container ) {
        const div = document.createElement("div");
        div.classList.add("alert", `alert-${ cssClass }`, "mt-4");
        div.appendChild( document.createTextNode( msj ) );
        console.log( container );
        const app = document.getElementById("app")

        container.insertBefore( div, app);

        setTimeout(()=> {
            document.querySelector(".alert").remove();

            window.location.reload();
        }, 2000);
    }
};