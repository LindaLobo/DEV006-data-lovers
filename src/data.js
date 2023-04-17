  //import pokemones from './data/pokemon/pokemon.js';

import { getData } from "./main.js"

  
 
   export function hola(pokemones, type) {
    getData()
    console.log(pokemones)
  let pokemonFiltrado = pokemones.filter (
    (pokemon) => {
      if(pokemon.type.includes(type)){
      return pokemon
    }})
    console.log({pokemonFiltrado})

    localStorage.setItem("filtro", JSON.stringify(pokemonFiltrado))

 return pokemonFiltrado
 //console.log(pokemonFiltrado)
}
