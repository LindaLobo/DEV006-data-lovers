export let data = import ('./data/pokemon/pokemon.js')
.then ((res) => res.json)
.then ((res) => {console.log (data)})

// const res = await fetch("./data/pokemon/pokemon.json");
// export const data = await res.json();
// console.log(data);



// let pokemon = fetch("./data/pokemon/pokemon.json")
// const data = pokemon.json()
// console.log(data)

// let pokemonFiltrado = pokemones.filter (
//   (pokemon) => {
  
//     if(pokemon.type == "fire"){
//       return pokemonFiltrado
//     }
//   }
// )

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
