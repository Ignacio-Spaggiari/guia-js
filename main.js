console.log("Guía JavaScript iniciada");

const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;

console.log(nombre, edad, vida, puntaje, estaActivo);

let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;

let puntajeFinal = puntosBase + bonus - penalizacion;

console.log(puntajeFinal);

const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
 const valor = input.value;

 // Convertir valor a número
 const numero = Number(valor);

 // Sumar 10
 const resultado = numero + 10;

 // Mostrar el resultado en pantalla
 mensaje.textContent = resultado;
});

let edadJugador = 15;

if (edadJugador >= 13) {
 console.log("Puede jugar");
} else {
 console.log("No puede jugar todavía");
}

let vidaJugador = 25;

if (vidaJugador > 70) {
 console.log("Jugador en buen estado");
} else if (vidaJugador >= 30 && vidaJugador <= 70) {
 console.log("Jugador herido");
} else if (vidaJugador >= 1 && vidaJugador <= 29) {
 console.log("Jugador en peligro");
} else if (vidaJugador === 0) {
 console.log("Game Over");
} else {
 console.log("La vida no puede ser menor que 0");
}

let opcion = "iniciar";

switch (opcion) {
 case "iniciar":
   console.log("El juego ha comenzado");
   break;

 case "configuracion":
   console.log("Abriendo configuración");
   break;

 case "creditos":
   console.log("Mostrando créditos");
   break;

 case "salir":
   console.log("Saliendo del juego");
   break;

 default:
   console.log("Opción no válida");
}