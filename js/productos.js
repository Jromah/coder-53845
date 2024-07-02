
let nombreUsuario = localStorage.getItem("nombre");
let apellidoUsuario = localStorage.getItem("apellido");
let emailUsuario = localStorage.getItem("email");


document.getElementById("nombre-usuario").textContent = nombreUsuario;
document.getElementById("apellido-usuario").textContent = apellidoUsuario;
document.getElementById("email-usuario").textContent = emailUsuario;


let carrito = [];


const botonesAgregar = document.querySelectorAll("#btn1, #btn2, #btn3, #btn4"); 

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
        const idProducto = boton.id.replace("btn", ""); 
        const cantidad = parseInt(document.getElementById(`cantidad${idProducto}`).value);

        agregarProductoAlCarrito(idProducto, cantidad);
        actualizarResumenCarrito();
    });
});


function agregarProductoAlCarrito(idProducto, cantidad) {

    const productoExistente = carrito.find(producto => producto.id === idProducto);

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {

        carrito.push({
            id: idProducto,
            nombre: obtenerNombreProducto(idProducto), 
            precio: obtenerPrecioProducto(idProducto), 
            cantidad: cantidad
        });
    }
}


function obtenerNombreProducto(idProducto) {
    switch (idProducto) {
        case "1":
            return "Campera Ferrari ";
        case "2":
            return "Campera Mercedes ";
        case "3":
            return "Campera Redbull ";
        case "4":
            return "Gorra Leclerc ";
        default:
            return "Producto sin nombre ";
    }
}


function obtenerPrecioProducto(idProducto) {
    switch (idProducto) {
        case "1":
            return 15; // Precio para el producto 1
        case "2":
            return 12; // Precio para el producto 2
        case "3":
            return 20; // Precio para el producto 3
        case "4":
            return 8; // Precio para el producto 4
        default:
            return 0; 
    }
}



function actualizarResumenCarrito() {

    const tablaCarrito = document.getElementById("tabla-carrito").querySelector("tbody");
    tablaCarrito.innerHTML = "";


    carrito.forEach(producto => {
        const fila = tablaCarrito.insertRow();

        const celdaProducto = fila.insertCell();
        celdaProducto.textContent = producto.nombre;

        const celdaPrecio = fila.insertCell();
        celdaPrecio.textContent = "$" + producto.precio;

        const celdaCantidad = fila.insertCell();
        celdaCantidad.textContent = producto.cantidad;

        const celdaSubtotal = fila.insertCell();
        celdaSubtotal.textContent = "$" + (producto.precio * producto.cantidad);
    });

    // Calcular y mostrar el total
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    document.getElementById("total").textContent = "$" + total;
}
