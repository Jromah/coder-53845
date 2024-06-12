const productos = [
    { nombre: 'Campera Ferrari 2023', precio: 2500 },
    { nombre: 'Campera RedBull 2023', precio: 2000 },
    { nombre: 'Campera Mercedes 2022', precio: 1500 },
    { nombre: 'Gorra Mercedes 2023', precio: 200 },
    { nombre: 'Gorra Leclerc 2024', precio: 3000 },
    { nombre: 'Gorra RedBull 2024', precio: 2700 }
];

let carrito = [];
let seleccion = '';
do {
    seleccion = prompt('Elige un producto y cuando quieras terminar la compra escribe finalizar:\n' + productos.map((producto, i) => `${i + 1}. ${producto.nombre}`).join('\n') );
    if (seleccion !== 'finalizar') {
        const cantidad = parseInt(prompt('¿Cuántas unidades quieres?'), 10);
        const producto = productos[parseInt(seleccion, 10) - 1];
        carrito.push({ ...producto, cantidad });
    }
} while (seleccion !== 'finalizar');

const total = carrito.reduce((acum, { precio, cantidad }) => acum + precio * cantidad, 0);
alert(`El total de tu compra es: $${total}` + ' pesos.');