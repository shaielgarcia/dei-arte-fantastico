//Array
let obras = ["buda", "fauno", "duende del jardin", "criatura mitologica", "hadas", "dragones", "unicornio", "magos"]

console.log(obras);

obras.push("c magica")
console.log(obras);

obras.push("ogros")
console.log(obras);

obras.unshift("duende");
console.log(obras);

obras[3] = "Elementales"
console.log(obras);

obras.sort()
console.log(obras)

let listaDefinitiva = obras.concat(obras)
console.log(listaDefinitiva);

let listaReducida = listaDefinitiva.slice(2, 8)
console.log(listaReducida)

let lista1 = listaDefinitiva.slice(0, 3)
let lista2 = listaDefinitiva.slice(8, listaDefinitiva.length)
let lista3 = lista1.concat(lista2)
console.log(lista3)

class esculturas {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
}

let listaObras = [];

listaObras.push(new esculturas("Duende del jardin", 7000))
listaObras.push(new esculturas("Buda", 9000))
listaObras.push(new esculturas("Fauno", 8000))
listaObras.push(new esculturas("Hadas", 2000))
listaObras.push(new esculturas("Elemental", 6000))
listaObras.push(new esculturas("Duende de cometa", 7000))

const agregarEsculturasALaLista = () => {
    let nombre = prompt("Nombre de la escultura");
    let precio = Number(prompt("Precio del producto"));
    let esculturas = new esculturas(nombre, precio)
    listaObras.push(esculturas)
}

listaObras.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1
    }

    if (a.precio < b.precio) {
        return -1
    }
    return 0
})

listaObras.toString()
console.log(listaObras);

listaObras.forEach(obj => {
    console.log(obj.precio);
})

let search = prompt("Que obra buscas?")
let buscadorMultiple = listaObras.filter(obj => obj.nombre === search)
console.log(buscadorMultiple);

let num1 = prompt("Ingrese tu numero de cuenta");
let num2 = prompt("Ingrese la fecha del dia de hoy");

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);

//Interaccion con mi html
document.getElementById("nombre").value = "Shaiel";
document.getElementById("edad").value = 20;
document.getElementById("Curso").value = "Java script";