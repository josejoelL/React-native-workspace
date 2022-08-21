/*
Nota: Como una buena práctica estoy utilizando 
el signo $ para identificar de manera más fácil las referencias al DOM.

Como se muestra en la imagen al igual que con jQuery
 puedo tener acceso a las propiedades del los inputs,
  por cierto en ves de utilizar 
  document.getElementById("calorias"); 
  podria a ver utilizado document.querySelector("#calorias");
*/


const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

const $DESCRIPTION = document.getElementById("description");
const $CALORIAS = document.getElementById("calorias");
const $CARBOIDRATOS = document.getElementById("carboidratos");
const $PROTEINAS = document.getElementById("proteinas");