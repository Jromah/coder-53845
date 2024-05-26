//espacio de pruebas

// console.log('hola mundo');

// let NombreComprador = "Mike";
// let ApellidoComprador = "Rodriguez";

// console.log(NombreComprador + " " +ApellidoComprador);
//fin de pruebas

/*
const NombreComprador = prompt("Hello mate!!, como puedo llamarte en tu paso por el pitstop");
const ApellidoComprador = prompt("Disculpa, podrias recordarme tu apellido?");

let AnioNacimiento = prompt(NombreComprador + " necesitamos tu año de nacimiento para saber si puedes salir a pista");

let Edad = 2024 - Number(AnioNacimiento);


if (Edad < 18) {
    console.log("¡¡PENALIZACIÓN!!, por cumplir el requisito de 18 años de edad");
    
} else {
    console.log(NombreComprador + " tienes " + Edad + " años, puedes confiar en nosotros, somos el mejor equipo para tu cambio de compuestos.");
}*/

/*console.log(NombreComprador);
console.log(ApellidoComprador);
console.log(AnioNacimiento);
console.log(Edad); */

let Opciones;

let camperas = 1;

while (Opciones != 0) {
    const Opciones = prompt("Cuantas camperas quieres: \n 1. 1 campera \n 2. Más de una? \n 3. \n 0. Salir");

    if (Opciones == 1) {
        alert ("Estas comprando " + camperas + " Campera ya eres parte del ¡¡BOX DE FERRARI!!");
    } else if (Opciones == 2) {
        // unidades = 1;

        let CantidadCamperas = prompt("Cuantas camperas quieres?");

        CantidadCamperas = CantidadCamperas * camperas;

        alert ("Estas comprando " + CantidadCamperas + " camperas de Ferrari!!");
    } else if (Opciones == 0) {
        alert ("Esperemos que vuelvas, cuando tengas contrato con un equipo.");
    } else {
        alert ("Ingresa un tipo de compuesto válido")
    }
}

