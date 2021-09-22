let contraseña = 52511
let pregunta = Number(prompt("Ingresar contraseña"))
intentos = 3

while (pregunta != contraseña && intentos > 0) {
    alert(`te equivocaste te quedan ${intentos} intentos`);
    intentos--
    dato = Number(prompt("Ingresar contraseña"));

    let validar = confirm("Desea cambiar la contraseña?")
    if (validar) {
        contraseña = Number(prompt("Ingresa tu nueva contraseña"));
    }
}