// Ejercicio 1
console.log("Guía JavaScript iniciada");

const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;

console.log(nombre, edad, vida, puntaje, estaActivo);


// Ejercicio 2
let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;

let puntajeFinal = puntosBase + bonus - penalizacion;

console.log(puntajeFinal);


// Ejercicio 3
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
 const valor = input.value;

 const numero = Number(valor);

 const resultado = numero + 10;

 mensaje.textContent = resultado;
});


// Ejercicio 4
let edadJugador = 15;

if (edadJugador >= 13) {
 console.log("Puede jugar");
} else {
 console.log("No puede jugar todavía");
}


// Ejercicio 5
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


// Ejercicio 6
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


// Ejercicio 7
for (let i = 3; i >= 1; i--) {
 console.log(i);
}

console.log("¡Comienza!");


// Ejercicio 8
let puntajeTotal = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
 puntajeTotal += 10;
}

console.log(puntajeTotal);


// Ejercicio 9
const inventario = ["espada", "poción", "llave", "escudo", "mapa"];

console.log(inventario[0]);
console.log(inventario[inventario.length - 1]);
console.log(inventario.length);


// Ejercicio 10
const inventario2 = ["espada", "poción", "llave", "escudo"];

for (let i = 0; i < inventario2.length; i++) {
 console.log(inventario2[i]);
}


// Ejercicio 11
let mochila = [];

mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");

mochila.pop();

console.log(mochila);


// Ejercicio 12
const inventario3 = ["espada", "llave", "escudo"];

if (inventario3.includes("llave")) {
 console.log("La puerta se abre");
} else {
 console.log("Necesitás una llave");
}


// Ejercicio 13
function saludarUsuario(nombre) {
 console.log("Bienvenido/a, " + nombre);
}

saludarUsuario("Milo");


// Ejercicio 14
function calcularVidaRestante(vida, danio) {
 return vida - danio;
}

let resultado = calcularVidaRestante(100, 30);

console.log(resultado);


// Ejercicio 15
const sumar = (a, b) => {
 return a + b;
};

console.log(sumar(10, 5));


// Ejercicio 16
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


// Ejercicio 17
const jugador2 = {
 nombre: "Kai",
 nivel: 1,
 monedas: 0
};

jugador2.nivel += 1;
jugador2.monedas += 50;

console.log(jugador2);


// Ejercicio 18
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


// Ejercicio 19
const personajesFuertes = personajes.filter((personaje) => {
 return personaje.nivel >= 3;
});

console.log(personajesFuertes);


// Ejercicio 20
const nombres = personajes.map((personaje) => {
 return personaje.nombre;
});

console.log(nombres);


// Ejercicio 21
const personajeEncontrado = personajes.find((personaje) => {
 return personaje.nombre === "Kai";
});

console.log(personajeEncontrado);


// Ejercicio 22
const vidaTotal = personajes.reduce((acumulador, personaje) => {
 return acumulador + personaje.vida;
}, 0);

console.log(vidaTotal);


// Ejercicio 23
const mensaje2 = document.getElementById("mensaje");

mensaje2.textContent = "Bienvenido a la guía de JavaScript";

mensaje2.style.color = "blue";


// Ejercicio 24
const boton2 = document.getElementById("btn");
const mensaje3 = document.getElementById("mensaje");

let puntos = 0;

boton2.addEventListener("click", function () {
 puntos += 10;

 mensaje3.textContent = "Puntos: " + puntos;
});


// Ejercicio 25
const input2 = document.getElementById("dato");
const boton3 = document.getElementById("btn");
const mensaje4 = document.getElementById("mensaje");

boton3.addEventListener("click", function () {

 if (input2.value === "") {
   mensaje4.textContent = "Ingresá un nombre para continuar";
 } else {
   mensaje4.textContent = "Bienvenido/a, " + input2.value;
 }

});


// Ejercicio 26
const jugador3 = {
 nombre: "Luna",
 puntaje: 1500
};

localStorage.setItem("jugador", JSON.stringify(jugador3));

const jugadorGuardado = JSON.parse(localStorage.getItem("jugador"));

console.log(jugadorGuardado);