// Ejercicio 27

¿Cuándo usarías let?

Usaría let cuando necesito crear una variable cuyo valor puede cambiar durante el programa.

Ejemplo:


let vida = 100;
vida = 80;


¿Cuándo usarías const?

Usaría const cuando el valor no debe cambiar.

Ejemplo:


const nombre = "Luna";


¿Por qué actualmente se recomienda evitar var?

Porque var tiene un alcance menos seguro y puede generar errores difíciles de detectar.  
Actualmente se recomienda usar let y const porque son más modernos y fáciles de controlar.

// Ejercicio 28

¿Qué se muestra primero?

Primero se muestra:


Local


¿Qué se muestra después?

Después se muestra:


Global


¿Por qué?

Porque la variable nombre creada dentro de la función tiene alcance local y solo existe dentro de esa función.

La variable nombre creada fuera de la función tiene alcance global y existe en todo el archivo.

Por eso:
- dentro de la función se usa "Local"
- fuera de la función se usa "Global"

// Ejercicio 29

Un array se usa para guardar varios elementos relacionados en una lista.

Ejemplo:


const inventario = ["espada", "poción", "llave"];


Este array representa los objetos que tiene un jugador.

Un objeto se usa para guardar características o propiedades de una entidad.

Ejemplo:


const jugador = {
 nombre: "Luna",
 vida: 100,
 nivel: 3
};


Este objeto representa la información de un jugador.

Entonces:
- array → lista de elementos
- objeto → características de algo


// Ejercicio 30

¿Qué es un evento en JavaScript?

Un evento es una acción que ocurre en una página web y que JavaScript puede detectar y responder.

¿Qué elemento escucha el evento?

El botón llamado boton.

¿Qué evento se está escuchando?

El evento click.

¿Qué acción se ejecuta?

Se muestra en consola el mensaje:


El usuario hizo clic

¿Dónde podríamos aplicar esto en una página web o videojuego?

Podríamos usarlo en:
- botones de iniciar juego
- botones de ataque
- menús
- formularios
- compras dentro de un juego
- acciones del usuario en una página web