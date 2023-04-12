import { data, pokemonFiltrado, myFuntion } from "./data.js";
// import data from './data/pokemon/pokemon.js';

export let getData = () => {
  fetch("./data/pokemon/pokemon.json")
    .then((res) => res.json())
    .then((res) => {
      let pokemones = res.pokemon;
      const contenedor = document.getElementById("tarjeta2");
      contenedor.innerHTML = "";
      pokemones.forEach((pokemon) => {
        //se crea un div por cada pokemon y se agrega una clase
        let bloque = document.createElement("div");
        bloque.id = `tarjeta-${pokemon.name}`;
        // clase para dar estilo al div
        bloque.classList.add("bloquePokemones");
        //clase para agregar imagen segun el tipo de pokemon
        bloque.classList.add(`pokemon-${pokemon.type[0]}`);

        bloque.innerHTML = `<div class="bloquetransparente"> <h2 class="letrastarjetas" > ${pokemon.name}
        </h2> <img src="${pokemon.img}"> <div> <img id="boton-tipos" src=./img/iconos/${pokemon.type[0]}.png>
        </div> <h2 class="letrastarjetas">${pokemon.num}</h2> </div>`;
        //al contenedor le agrego como hijo los div (asigno donde quiero que este)
        contenedor.appendChild(bloque);

        let tarjeta = document.getElementById(`tarjeta-${pokemon.name}`);
        const action = () => {
          document.getElementById("tarjeta2").innerHTML = "";
          let pokemonDescripcion = document.getElementById("tarjeta2");
          pokemonDescripcion.innerHTML = ` <div class="transparencia"><div class= "pokemon-${pokemon.type[0]} "> 
          <h2 class="tittle">${pokemon.name} 
          </h2> <div class="tarjeta3"><img src="${pokemon.img}">
          <div class="fondoCaracteristicas"><p>  ${pokemon.about}  <br>  type: ${pokemon.type} <br>
           city: ${pokemon.generation.name} <br> num:  ${pokemon.num} <br>
           resistant: ${pokemon.resistant} <br> weaknesses: ${pokemon.weaknesses} </p></div> </div> </div> </div>`;
          let botonPokemon;
        };
        tarjeta.addEventListener("click", action);
      });
    })
    .catch((err) => console.error(err));
};

let botonPokemon = document.getElementById("pokemon");

botonPokemon.addEventListener("click", () => {
  document.getElementById("pokebola-img").setAttribute("style", "display:none");
//   document.getElementById("tarjeta1").innerHTML = `
//     <div class="dropdown">
//   <button class="dropbtn">Dropdown</button>
//   <div class="dropdown-content">
//     <a onclick="new_data()">Fire</a>
//     <a id="boton-water">Water</a>
//     <a id="boton-grass">Grass</a>
//   </div>
// </div>`;

  getData();
});
