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
      let pokemones = res.pokemon;
      console.log(pokemones);
      console.log(pokemones[0]);
      const contenedor = document.getElementById("tarjeta2");
      pokemones.forEach((pokemon) => {
        
        let bloque = document.createElement("div");
        bloque.id = pokemones.name
        bloque.classList.add("bloquePokemones")
        bloque.classList.add(`pokemon-${pokemon.type[0]}`)
        console.log(pokemon.type[0])
        bloque.innerHTML = `<div class="bloquetransparente" id="tarjeta_${pokemon.name}"> <h2 class="letrastarjetas" > ${pokemon.type[0]}</h2> <img src="${pokemon.img}"> <h2 class="letrastarjetas">${pokemon.num} </div>`;
        contenedor.appendChild(bloque);
        
      });
    })
    .catch((err) => console.error(err));

}

botonPokemon.addEventListener("click", () => {
  document.getElementById("pokebola-img").setAttribute("style", "display:none");
  document.getElementById("tarjeta1").setAttribute("style", "display:none").innerHTML = getData()

});
