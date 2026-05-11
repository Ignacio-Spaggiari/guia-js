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

for (let i = 3; i >= 1; i--) {
 console.log(i);
}

console.log("¡Comienza!");

let puntajeTotal = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
 puntajeTotal += 10;
}

console.log(puntajeTotal);

const inventario = ["espada", "poción", "llave", "escudo", "mapa"];

console.log(inventario[0]);
console.log(inventario[inventario.length - 1]);
console.log(inventario.length);

const inventario = ["espada", "poción", "llave", "escudo"];

for (let i = 0; i < inventario.length; i++) {
 console.log(inventario[i]);
}

let mochila = [];

mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");

mochila.pop();

console.log(mochila);

const inventario = ["espada", "llave", "escudo"];

if (inventario.includes("llave")) {
 console.log("La puerta se abre");
} else {
 console.log("Necesitás una llave");
}

function saludarUsuario(nombre) {
 console.log("Bienvenido/a, " + nombre);
}

saludarUsuario("Milo");

function calcularVidaRestante(vida, danio) {
 return vida - danio;
}

let resultado = calcularVidaRestante(100, 30);

console.log(resultado);

const sumar = (a, b) => {
 return a + b;
};

console.log(sumar(10, 5));

const jugador = {
 nombre: "Luna",
 vida: 100,
 energia: 80,
 nivel: 1,
 inventario: ["espada", "poción"]
};

console.log(jugador.nombre);
console.log(jugador.vida);
console.log(jugador.energia);
console.log(jugador.nivel);
console.log(jugador.inventario);

const jugador = {
 nombre: "Kai",
 nivel: 1,
 monedas: 0
};

jugador.nivel += 1;
jugador.monedas += 50;

console.log(jugador);

const personajes = [
 { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
 { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
 { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];

for (let i = 0; i < personajes.length; i++) {
 console.log(
   personajes[i].nombre +
   " es " +
   personajes[i].tipo +
   " y está en nivel " +
   personajes[i].nivel
 );
}