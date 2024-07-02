// Importar localStorage
const localStorage = window.localStorage;

// Función para obtener nombre, apellido y correo electrónico
function obtenerDatosUsuario() {
    let datosUsuario = prompt('Ingrese su nombre, apellido y correo electrónico separados por comas (nombre,apellido,correo@ejemplo.com): ');

    while (!datosUsuario || datosUsuario.split(',').length !== 3) {
        alert('Ingrese los datos correctamente: nombre, apellido, correo electrónico (separados por comas).');
        datosUsuario = prompt('Ingrese su nombre, apellido y correo electrónico separados por comas (nombre,apellido,correo@ejemplo.com): ');
    }

    const [nombre, apellido, correoElectronico] = datosUsuario.split(',');
    return {
        nombre,
        apellido,
        correoElectronico
    };
}

// Función para crear el objeto usuario
function crearObjetoUsuario(datosUsuario) {
    return {
        nombre: datosUsuario.nombre,
        apellido: datosUsuario.apellido,
        correoElectronico: datosUsuario.correoElectronico
    };
}

// Función para guardar el objeto usuario en localStorage
function guardarObjetoUsuario(usuario) {
    const usuarioJSON = JSON.stringify(usuario);
    localStorage.setItem('usuario', usuarioJSON);
}

// Función para mostrar los datos del usuario
function mostrarDatosUsuario() {
    const usuarioJSON = localStorage.getItem('usuario');
    if (usuarioJSON) {
        const usuario = JSON.parse(usuarioJSON);
        console.log('Nombre:', usuario.nombre);
        console.log('Apellido:', usuario.apellido);
        console.log('Correo electrónico:', usuario.correoElectronico);
    } else {
        console.log('No se encontraron datos de usuario almacenados.');
    }
}

// Ejecución del script al cargar la página
window.onload = () => {
    const datosUsuario = obtenerDatosUsuario();
    const usuario = crearObjetoUsuario(datosUsuario);
    guardarObjetoUsuario(usuario);
    mostrarDatosUsuario();
};
