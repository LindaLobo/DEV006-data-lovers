// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let botonPokemon = document.getElementById("pokemon");

let getData = () => {   fetch(
    "./data/pokemon/pokemon.json"
  )
    .then((res) => res.json())
    .then((res) => {
      let pokemon = res.pokemon;
      console.log(pokemon);
      console.log(pokemon[0]);
      const contenedor = document.getElementById("tarjeta2");
      pokemon.forEach((pokemones) => {
        let bloque = document.createElement("div");
        bloque.innerHTML = ` <h2 class="nombrePoke"> ${pokemones.name}</h2> <img src="${pokemones.img}"> `;
        contenedor.appendChild(bloque);
      });
    })
    .catch((err) => console.error(err));

}

botonPokemon.addEventListener("click", () => {
  document.getElementById("pokebola-img").setAttribute("style", "display:none");
  document.getElementById("tarjeta1").setAttribute("style", "display:none").innerHTML = getData()


});
