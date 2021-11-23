//Array
let autos = ["audi", "honda", "Iveco", "Nissan", "Peugeot", "Toyota", "Chevrolet", "Ford"]

console.log(autos);

autos.push("fiat 1")
console.log(autos);

autos.push("gol power")
console.log(autos);

autos.unshift("suran");
console.log(autos);

autos[3] = "Scania"
console.log(autos);

autos.sort()
console.log(autos)

let listaDefinitiva = autos.concat(autos)
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
let listaAutos = [];

listaAutos.push(new esculturas("fiat ", 7000))
listaAutos.push(new esculturas("honda", 9000))
listaAutos.push(new esculturas("Iveco", 8000))
listaAutos.push(new esculturas("Hadas", 2000))
listaAutos.push(new esculturas("Peugeot", 6000))
listaAutos.push(new esculturas("Ford", 7000))

const agregarEsculturasALaLista = () => {
    let nombre = prompt("Nombre de la escultura");
    let precio = Number(prompt("Precio del producto"));
    let esculturas = new esculturas(nombre, precio)
    listaObras.push(esculturas)
}

listaAutos.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1
    }

    if (a.precio < b.precio) {
        return -1
    }
    return 0
})

listaAutos.toString()
console.log(listaAutos);

listaAutos.forEach(obj => {
    console.log(obj.precio);
})