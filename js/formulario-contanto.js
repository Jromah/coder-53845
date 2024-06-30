document.getElementById('btn-form').addEventListener('click', function () {

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let sexo = document.getElementById('sexo').value;
    let correo = document.getElementById('correo electrónico').value;
    let mensaje = document.getElementById('mensaje').value;

    if (!nombre || !apellido || !sexo || !correo || !mensaje) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    alert(nombre + ', bienvenido al paddock');

    let usuarioData = {
        nombre: nombre,
        apellido: apellido,
        sexo: sexo,
        correo: correo,
        mensaje: mensaje
    };
    localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
});

console.log(usuarioData);