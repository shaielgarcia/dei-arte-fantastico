// algoritmo con un condicional

const nom1 = "shaiel1"
const nom2 = "shai02"
const nom3 = "shaii2"

let pregunta = prompt("Ingrese tu usuario")

pregunta = pregunta.toLowerCase()

if (pregunta === nom1 || pregunta === nom2 || pregunta === nom3) console.log(` Podes ingresar ${pregunta}`);
else { alert(`Nombre de usuario incorrecto ${pregunta} `) }