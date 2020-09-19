/* ------------------------------------- TIPOS BASICOS EN TYPESCRIPT ------------------------------------- */

console.log("Hello TypeScript");

function add(a:number, b: number) {
   return a + b;
}

let sum = add(7,4);

// Tipados basicos en TypeScript

/* ↓ Para nosotros indicar el tipo de variables que vamos a declarar en typescript lo hacemos de la siguiente manera
con : <tipo de dato> */
let muted: boolean = true; //Booleano

// Aun si nosotros no indicamos directametne el tipo de dato, typescript hace un analisis estatico y lo determina automaticamente
let age = 6; //Number
let numerador:number = 6; //Number
let denominador:number = age; //Number
let resultado = numerador / denominador; //Number

// Strings --------------
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;



//Arreglos -----------------------
/* En typeScript podemos elegir entre hacer arreglos de un solo tipo o  */
let people: string[] = [];

people = ["Isabel", "Nicole", "Raul"];
// people.push(9000)
//  ↑ Al momento de usar el punto directamente nos brindara los metodos que pueden ser utilizados para arrays


//↓ Si queremos crear un string con elementos de diferentes tipos podemos hacerlo asi

let peopleAndNumbers: Array< string | number > = []; //Le decimos al programa que sera un array de strings o numeros

/* ↓ En este tipo especial de arrays podemos meter valores sin importar si son strings o numeros */
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9001); 


/* ↓ Los Enum son un tipo de arreglo fijo que no puede cambiar posteriormente */

enum Color {
   Rojo = "Rojo", //Si inicializamos a un elemento de los enum, sera necesario hacer lo mismo con el resto
   Verde = "Verde",
   Azul = "Azul",
}

//
let colorFavorito: Color = Color.Verde;

console.log(`Mi color favorito es ${colorFavorito}`) //Mi color favorito es 1



/* Podemos usar la palabra clave "any" en los casos que no sabemos exactamente de que tipo será una variable */
/* let comodin = 'joker';

comodin = { type: wildcard }

↑Esto nos reportara un error */

//↓ 
let comodin: any = 'joker';

comodin = { type: 'Wildcard' };
// ↑ Una vez asignando la variable como tipo 'any' podemos reasignarla incluso a un objeto


//Object
let someObject: object = { type: 'Wildcard' }; 
/* ↑ Podemos especificar que lo que vamos a declarar es un objeto */




