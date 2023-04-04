// import { imageType } from './data.js';
// import data from './data/pokemon/pokemon.js';

let getData = () => {
  fetch("./data/pokemon/pokemon.json")
    .then((res) => res.json())
    .then((res) => {
      let pokemones = res.pokemon;
      // console.log(pokemones);
      // console.log(pokemones[0]);
      const contenedor = document.getElementById("tarjeta2");
      pokemones.forEach((pokemon) => {
        // let raza = imageType(pokemon.type)
        // console.log(raza)
        let bloque = document.createElement("div");
        bloque.id = pokemones.name;
        bloque.classList.add("bloquePokemones");
        bloque.classList.add(`pokemon-${pokemon.type[0]}`);
        bloque.innerHTML = `<div class="bloquetransparente" id="tarjeta_"> <h2 class="letrastarjetas" > ${pokemon.name}
        </h2> <img src="${pokemon.img}"> <div> <img id="boton-tipos" src=./img/iconos/${pokemon.type[0]}.png alt="tipo de pokemon"> 
        </div> <h2 class="letrastarjetas">${pokemon.num} </div>`;
        contenedor.appendChild(bloque);
      });
    })
    .catch((err) => console.error(err));
};

let botonPokemon = document.getElementById("pokemon");

botonPokemon.addEventListener("click", () => {
  document.getElementById("pokebola-img").setAttribute("style", "display:none");
  document.getElementById("tarjeta1").setAttribute("style", "display:none").innerHTML = getData();
})
