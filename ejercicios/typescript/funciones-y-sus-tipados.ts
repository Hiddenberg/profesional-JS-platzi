/* ---------------------------------- FUNCIONES Y SUS TIPADOS EN TS ---------------------------------- */
/*                                   ↓ De esta forma podemos definir directamente el tipo de variable que regresara la funcion*/
function add(a:number, b:number): number {
   return a + b;
}

const sum = add(54,65) 


/* Aqui especificaremos directamente que esta funcion va a retornar otra funcion */
function createAdder(a:number): (number) => number {
   return function (b:number) {
      return b + a;
   }
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

/* Si agregamos un signo de interrogacion   (↓) de esta forma, podemos hacer que este parametro en la funcion sea opcional */
function fullName(firstName: string, lastName?: string): string {
   return `${firstName} ${lastName}`;
}

const richard = fullName('richard');