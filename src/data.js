// import {getData} from './main.js';

const res = await fetch("./data/pokemon/pokemon.json");
export const data = await res.json();
console.log(data);

export let pokemonFiltrado = data.pokemon.filter(pokemon => pokemon.type[0] == "fire");
  console.log(pokemonFiltrado)

export const myFuntion = (tipo) => {
  console.log(tipo)
}


// export function filtrar (pokemones, type) {
//   return pokemones.filter(pokemon => pokemon.type == type)
// }
// console.log(filtrar())

// export const filtrar = () => {
//   let nuevo = data()
//   let tipos = nuevo.filter(pokemon => pokemon.type)
//   console.log(tipos)
//   return tipos
// }

// export const anotherExample = () => {
//   return "OMG";
// };
