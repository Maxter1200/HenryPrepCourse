/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var aux = Object.keys(objeto);
   var arrayPadre = aux.map((key) => { return [key, objeto[key]]; });
   return arrayPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var obj = {};
   string = string.split("");
   string.forEach(letra => {
      if(obj.hasOwnProperty(letra))
         obj[letra]++;
      else
         obj[letra] = 1;
   });
      
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayus = [];
   var minus = [];

   for (let i = 0; i < string.length; i++)
   {
      if(string[i] >= 'A' && string[i] <= 'Z')
         mayus.push(string[i]);
      else if(string[i] >= 'a' && string[i] <= 'z')
         minus.push(string[i]);
   }

   mayus = mayus.join('');
   minus = minus.join('');

   return mayus + minus;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var mirror = [];
   var palabras = frase.split(" ");

   for(let p=0; p < palabras.length; p++)
   {
      let letras = palabras[p];
      let aux = [];
      for(let l=0; l < letras.length; l++)
      {
         aux.unshift(letras[l]);
      }
      aux = aux.join('');
      mirror.push(aux);
   }

   mirror = mirror.join(' ');
   return mirror;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var inv = [];

   let digits = Array.from(String(numero), Number);
   digits.forEach((num) => { inv.unshift(num)});

   inv = parseInt(inv.join(''));

   if(numero == inv)
      return "Es capicua";
   else
      return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var aux = string.split('');
   aux = aux.filter((letra) => letra != "a" && letra != "b" && letra != "c");
   return aux.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let long = [];
   arrayOfStrings.forEach((pal) => { long.push(pal.length); });

   for (let i = 1; i < long.length; i++) 
   {
      for (let f = 0; f < long.length - i; f++) 
      {
         if (long[f] > long[f+1])
         {
            let aux1 = long[f];
            long[f] = long[f+1];
            long[f+1] = aux1;

            let aux2 = arrayOfStrings[f];
            arrayOfStrings[f] = arrayOfStrings[f+1];
            arrayOfStrings[f+1] = aux2;
         }
      }
   }

   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var interseccion = [];

   array1.forEach((num) => {
      if(array2.includes(num))
         interseccion.push(num);
   })

   return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
