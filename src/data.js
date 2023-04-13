  //import pokemones from './data/pokemon/pokemon.js';
  
 
   export function hola(pokemones) {
    //console.log(pokemones)
  let pokemonFiltrado = pokemones.filter (
    (pokemon) => {
      if(pokemon.type == `fire`){
      //console.log(pokemon)
      return pokemon
    }})
 return pokemonFiltrado
 //console.log(pokemonFiltrado)
}




// let data = import ('./data/pokemon/pokemon.js')


// const res = await fetch("./data/pokemon/pokemon.json");
// export const data = await res.json();
// console.log(data);



// let pokemon = fetch("./data/pokemon/pokemon.json")
// const data = pokemon.json()
// console.log(data)


// console.log(pokemonFiltrado)


// let pokemonFiltrado = pokemones.filter(pokemon => pokemon.type[0] == "fire");
//   console.log(pokemonFiltrado)

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

// const res = await fetch("./data/pokemon/pokemon.json");
// export const data = await res.json();
// console.log(data);

// export let pokemonFiltrado = data.pokemon.filter(pokemon => pokemon.type[0] == "fire");
//   console.log(pokemonFiltrado)

// export const anotherExample = () => {
//   return "OMG";
// };
