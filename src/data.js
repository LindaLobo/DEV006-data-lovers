import { dataPokemones } from "./main.js";

export const getData = async () => {
  let res = await fetch("./data/pokemon/pokemon.json");
  let response = await res.json();
  return response.pokemon;
};

export const filtroPokemon = async (pokemones, type) => {
  dataPokemones();
  let pokemonFiltrado = pokemones.filter((pokemon) => {
    if (pokemon.type.includes(type)) {
      return pokemon;
    }
  });
  localStorage.setItem("filtro", JSON.stringify(pokemonFiltrado));

  return pokemonFiltrado;
};

export const ordenar = async () => {
  let pokemones = await getData();
  let ordenados = pokemones.sort((a, b) => {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
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
  let pokemones = await getData();
  let resultado = pokemones.find((dato) => dato.name === nombre);
  console.log(resultado);
  return resultado;
}
