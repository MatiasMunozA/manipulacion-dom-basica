### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve?

    Una variable es un espacio de memoria en el cual se le puede asignar un dato.


¿Cuál es la diferencia entre declarar e inicializar una variable?

    Declarar es establecer el nombre de la variable, mientras que incializar es entregar un dato a la varible para que lo pueda guardar.

¿Cuál es la diferencia entre sumar números y concatenar strings?

    La diferencia es que sumar numeros es una operación matematica y concatenar es la union de 2 o mas strings.

¿Cuál operador me permite sumar o concatenar?

    Ambos comparten el operador +.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre:  string
Apellido: string
Nombre de usuario en Platzi: string
Edad: number
Correo electrónico:string
Mayor de edad: Booleano
Dinero ahorrado: string
Deudas: string

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
```js

    let Nombre = "Matias";
    let Apellido = "Muñoz";
    let Nombre de usuario en Platzi = "@matias";
    let Edad = 25
    let Correo electrónico = "matiasnicolas.munoz@alumnos.ulagos.cl";
    let Mayor de edad = > 18
    let Dinero ahorrado = 30000
    let Deudas = 15000

```
### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
```js

    let Nombre: "Matias";
    let Apellido: "Muñoz";

    let nombreCompleto: Nombre + " " + Apellido;
    console.log(nombreCompleto);

```
Dinero real (dinero ahorrado menos deudas)
```js

    let dineroAhorrado = 30000
    let deudas = 15000

    let dineroReal= dineroAhorrado - deudas;
    console.log(dineroReal);

```



Funciones
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?

    Una funcion es como una caja en la cual se ingresa información, estrabaja en un algoritmo y se regresa un resultado.

¿Cuándo me sirve usar una función en mi código?

    Cuando necesito realizar un proceso varias veces.

¿Cuál es la diferencia entre parámetros y argumentos de una función?

    parámetros son las variables de una función, mientras que los argumentos son los valores que se devuelven ?

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

    const apodo = function (name,lastName,nickName) {
        let completeName = name + " " + lastName;
        console.log("Mi nombre es " + completeName +  " pero prefiero que me digas "  + nickName);
    };

```

Condicionales
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?

    Un condicional permite escoger entre varias opciónes segun los parametros que se les asignen.

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

Los condicionales que existen y sus funciones son: if el cual es el primero que se evalua, else if el cual es el segundo y se puede repetir,
por ultimo el else el cual es el caso donde no se escogio ninguna opción anterior.

swtich, todas las validaciones se comparan con la misma variable que definamos en el switch.

¿Puedo combinar funciones y condicionales?

Por supuesto, ambos conceptos se utilizan juntos a menudo, de esta manera se logran algoritmos mas complejos y eficientes.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

                const suscripcion = function (tipoDeSuscripcion) {
                    if (tipoDeSuscripcion == "Free") {
                        console.log("Solo puedes tomar los cursos gratis");
                        
                    } else if (tipoDeSuscripcion == "Basic") {
                        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
                        
                    } else if (tipoDeSuscripcion == "Expert") {
                        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
                        
                    } else {console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");}
                };


```


### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

```js

        const suscripcion1 = function (tipoDeSuscripcion) {
            if (tipoDeSuscripcion == "Free") {
                console.log("Solo puedes tomar los cursos gratis");
                return;
                
            } if (tipoDeSuscripcion == "Basic") {
                console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
                return;

            } if (tipoDeSuscripcion == "Expert") {
                console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
                return;

            } if (tipoDeSuscripcion == "ExpertPlus") {
                console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
                return;}
        };

```

Forma bonus
```js
const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

const conseguirTipoSuscripcion = function(suscripcion){
    if (tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    };

    console.warn("Ese tipo de suscripcion no existe");
}
```

Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?

    Un ciclo es una forma de repetir lineas de codigo hasta que se cumpla una condición.

¿Qué tipos de ciclos existen en JavaScript?

    Existe el ciclo for, while, do while, foreach.

¿Qué es un ciclo infinito y por qué es un problema?

    Su problema es que nunca termina de ejecutarse, lo cual puede dar errores y bugs en el codigo.

¿Puedo mezclar ciclos y condicionales?

    Si, ambos paramentros son comunmente utilizados.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

            let i = 0;
            while ( i<5) {
                console.log("El valor de i es: " + i);
                i++;
            }

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

            let i = 10;
            while ( i>1) {
                console.log("El valor de i es: " + i);
                i--;
            }

```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

````js
        i = 1;

        while (i>0) {
            let respuesta = prompt("Cuanto es 2 + 2?");
                if (respuesta == 4) {
                    console.log("Felicitaciónes.");
                    i=0;
                } else{i++;};
        }
````
Segunda forma

```js
let respeusta;

while(respuesta !="4"){
    let pregunta = prompt("Cuanto es 2 + 2?");
    respuesta = pregunta;
}
```
Listas
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?

    Un array es una lista de datos.

¿Qué es un objeto?

    Es una lista pero cada elemento tiene un nombre clave

¿Cuándo es mejor usar objetos o arrays?

    arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas, mientras que en un objeto
    cuando los nombres de cada elemento son importantes para nuestro algoritmo.

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

    Si, ya que ambos preceseden de una estructura similar, se logran mezclar de una manera uniforme.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js

const primerElemento = function (array) {
    console.log(array[0]); 
}

```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js

    const primerElemento1 = function (array) {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]); 
        }
        
    }

```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js

        const miObjeto = function (objeto) {
            const array = Object.values(objeto); 
            for (let i = 0; i < array.length; i++) {
                console.log(array[i]); 
            }
            
        }

```