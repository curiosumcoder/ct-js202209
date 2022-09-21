import ProductService from "./product.service.js";
import StarWarsService, { movies as m } from "./sw.service.js";
import * as SWS from "./sw.service.js";

const ps = new ProductService();
//console.log(ps.search('queso'));

const sws = new StarWarsService();
//sws.search('A');
//console.log(m);
console.log(SWS.movies);

// Callback
document.addEventListener("click", () => alert("You clic!"));
//XMLHttpRequest

// Promise
// const prom = new Promise((resolve, reject) => {
//     // Aquí lo que se tiene que hacer

//     try {
//         console.log('Ejecutando promise');
//         let a = null.toString()
//         setTimeout(() => {
//             resolve({id: 1, status: 'El resultado es OK'});
//         }, 3000);
//     } catch (error) {
//         reject(`Hubo un error ${error}`);
//     }
// });

// prom.then(result => {
//     console.log('Promise finalizada ', result);
// }).catch(error => {
//     console.error('Promise no finalizada ', error);
// })

// rest
function Sumar(a, b, ...elresto) {
  console.log(arguments);
  console.log(elresto);
  return a + b + elresto.reduce((previous, current) => previous + current);
}

const numeros = [1, 2, 3, 4, 5, 6, 5, 10, 100];

console.log(`Resultado de la suma : ${Sumar(1, 2, 3, 4, 5, 6, 1)}`);
// spread
console.log(`Resultado de la suma : ${Sumar(...numeros)}`);

// Clouseure

function Principal() {
  let n = 0;
  return function () {
    return (n += 1);
  };
}

console.clear();
const fc = Principal();
console.log(fc());
console.log(fc());
console.log(fc());

// IIFE

const iife = function () {
  console.log("Esta es una IIFE");
};
iife();

// IIFE
(function () {
  console.log("Esta es una IIFE");
})();

const iife1 = () => console.log("Esta es una IIFE");
iife1();

// IIFE
(() => console.log("Esta es una IIFE"))();

// Tagged Template Literals

console.clear();
function createTag(templateText, ...keys) {
  console.log(templateText);
  console.log(keys);
}

const n = 100;
createTag`Este es la plantilla ${n}`;

// ---------------------------------------
function generaTemplate(strings, ...keys) {
  return function (data) {
    let temp = strings.slice();
    keys.forEach((key, i) => {
      temp[i] = temp[i] + data[key];
    });
    return temp.join("");
  };
}

const producto = {
  nombre: "Google Pixel L",
  imagen: "http://example.com/miImagen.png",
  precio: 699,
};

const ProductTemplate = generaTemplate`<article>
    <h1>${"nombre"}</h1>
    <img src=${"imagen"} />
    <span>${"precio"} € </span>
  </article>`(producto);

console.log(ProductTemplate);

console.log("App ready!");
