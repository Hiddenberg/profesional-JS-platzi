/* ------------------------------------- INTERFACES ------------------------------------- */

/* Las interfaces nos sirven para definir ciertas caracteristicas o propiedades que un objeto va a tener que
cumplir si o si por defecto ni mas, ni menos (a menos de que sean indicadas como opcionales)*/

enum Color {
   rojo = 'Rojo',
   verde = 'Verde',
}


interface Rectangulo {
   ancho: number
   alto: number
   color?: Color
}
//Si queremos hacer que una propiedad sea opcional podemos hacerlo agregando el simbolo de interrogacion

/* Para asignar una interfas a un objeto lo hacemos de la siguiente forma */
let rect: Rectangulo = {
   ancho:4,
   alto: 6,
   //color: Color.rojo, //Ahora podemos crear el objeto con o sin esta propiedad
}


function area(r:Rectangulo): number {
   return r.alto * r.ancho;
}

const areaRect = area(rect);

console.log(areaRect); //24


console.log(rect.toString()); // [object Object] (La funcion existe por defecto, ya que es heredada de los objetos en general, pero aun no esta definida correctametne por defecto)

rect.toString = function () {
   return this.color ? `Un rectangulo ${this.color}`: `Un rectangulo sin color`;
   /* Ya que ahora Color es opcional, haremos un if ternario para comprobar si es que existe esta proiedad en el objeto */
}

console.log(rect.toString()); //Un rectangulo Rojo