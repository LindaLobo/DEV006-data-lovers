import { dataPokemones } from "./main.js";
// const https = require('https')
// import fetch from 'node-fetch';
const fetch = ("./data/pokemon/pokemon.json")
import('node-fetch').then(({default: fetch}) => 
fetch("./data/pokemon/pokemon.json"));

// const url = "./data/pokemon/pokemon.json";

export const getData = async () => {
  const res = await fetch();
  const response = await res.json();
  return response.pokemon;
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
