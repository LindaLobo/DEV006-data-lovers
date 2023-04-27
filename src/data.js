import { dataPokemones } from "./main.js";
import pokemon from "./data/pokemon/pokemon.js"


export const getData = async () => {
  return pokemon.pokemon
};

export const filtroPokemon = async (pokemones, type) => {
  dataPokemones();
  const pokemonFiltrado = pokemones.filter((pokemon) => {
    if (pokemon.type.includes(type)) {
      return pokemon;
    }
  });
  localStorage.setItem("filtro", JSON.stringify(pokemonFiltrado));

  return pokemonFiltrado;
};

export const ordenar = async () => {
  const pokemones = await getData();
  const ordenados = pokemones.sort((a, b) => {
    const x = a.name.toLowerCase();
    const y = b.name.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });

  return ordenados;
};

export const obtenerPokemon = async (nombre) => {
  const pokemones = await getData();
  const resultado = pokemones.find((dato) => dato.name === nombre);
  // console.log(resultado);
  return resultado;
};
