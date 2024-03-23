alert ("Bienvenidos Coffee-Shop")

let totalCarrito = 0

class producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    
    }
}

let macchiato = new producto("Caramel Macchiato", 4800)
let cappuccino = new producto("Cappuccino", 3800)
let latte = new producto("Caffé Latte", 3600)
let frappuccino = new producto("Frappuccino", 3600)

const arrayCafe = [macchiato,cappuccino,latte,frappuccino,]

function comprar(){
    let opciones = parseInt(prompt(`Pulse 1 para agregar a su orden un ${arrayCafe[0].nombre} por $${arrayCafe[0].precio}\nPulse 2 para agregar a su orden un ${arrayCafe[1].nombre} por $${arrayCafe[1].precio}\nPulse 3 para agregar a su orden un ${arrayCafe[2].nombre} por $${arrayCafe[2].precio}\nPulse 4 para agregar a su orden un ${arrayCafe[3].nombre} por $${arrayCafe[3].precio}\nPulse 5 si desea filtrar por precio más bajo`))
    
    while (opciones < 1 || opciones > 5){
        opciones = parseInt(prompt(`Pulse 1 para agregar a su orden un ${arrayCafe[0].nombre} por $${arrayCafe[0].precio}\nPulse 2 para agregar a su orden un ${arrayCafe[1].nombre} por $${arrayCafe[1].precio}\nPulse 3 para agregar a su orden un ${arrayCafe[2].nombre} por $${arrayCafe[2].precio}\nPulse 4 para agregar a su orden un ${arrayCafe[3].nombre} por $${arrayCafe[3].precio}\nPulse 5 si desea filtrar por precio más bajo`))
    }
    let productoElegido;
    if (opciones == 1){
        productoElegido = arrayCafe[0]
        totalCarrito += arrayCafe[0].precio 
    }
    else if (opciones == 2){
        productoElegido = arrayCafe[1]
        totalCarrito += arrayCafe[1].precio
    }
    else if (opciones == 3){
        productoElegido = arrayCafe[2]
        totalCarrito += arrayCafe[2].precio
    }
    else if (opciones == 4){
        productoElegido = arrayCafe[3]
        totalCarrito += arrayCafe[3].precio
    }
   
    else if (opciones == 5){
        arrayCafe.sort((a,b) => a.precio - b.precio)
        opciones = parseInt(prompt(`Pulse 1 para agregar a su orden un ${arrayCafe[0].nombre} por $${arrayCafe[0].precio}\nPulse 2 para agregar a su orden un ${arrayCafe[1].nombre} por $${arrayCafe[1].precio}\nPulse 3 para agregar a su orden un ${arrayCafe[2].nombre} por $${arrayCafe[2].precio}\nPulse 4 para agregar a su orden un ${arrayCafe[3].nombre} por $${arrayCafe[3].precio}`))
        while (opciones < 1 || opciones > 5){
            opciones = parseInt(prompt(`Pulse 1 para agregar a su orden un ${arrayCafe[0].nombre} por $${arrayCafe[0].precio}\nPulse 2 para agregar a su orden un ${arrayCafe[1].nombre} por $${arrayCafe[1].precio}\nPulse 3 para agregar a su orden un ${arrayCafe[2].nombre} por $${arrayCafe[2].precio}\nPulse 4 para agregar a su orden un ${arrayCafe[3].nombre} por $${arrayCafe[3].precio}`))
        }
        if (opciones == 1){
            productoElegido = arrayCafe[0]
            totalCarrito += arrayCafe[0].precio
        }
        else if (opciones == 2){
            productoElegido = arrayCafe[1]
            totalCarrito += arrayCafe[1].precio
        }
        else if (opciones == 3){
            productoElegido = arrayCafe[2]
            totalCarrito += arrayCafe[2].precio
        }
        else if (opciones == 4){
            productoElegido = arrayCafe[3]
            totalCarrito += arrayCafe[3].precio
        }
     
    }
    let confirmacion = confirm(`Usted eligió ${productoElegido.nombre} y sale $${productoElegido.precio}, desea agregarlo al carrito?`)
    if (confirmacion == true){
        let confirmacion2 = confirm("El producto se agregó a su orden, desea comprar algo más?")
        if (confirmacion2 == true){
            comprar()
        } else{
            let confirmacion3 = confirm(`El total es de su orden es de ${totalCarrito}, desea pagar?`)
            if (confirmacion3 == true){
                alert("Gracias por su compra")
            } else{
                alert("Lo esperamos Pronto!")
            }
        }
    } else{
        let confirmacion4 = confirm("Desea Obtener Otros Productos?")
        if (confirmacion4 == true){
            comprar()
        } else{
            alert("Hasta Luego")
        }
    }
}

comprar()