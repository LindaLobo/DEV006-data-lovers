// import { imageType } from './data.js';
// import data from './data/pokemon/pokemon.js';



let getData = () => {
  fetch("./data/pokemon/pokemon.json")
    .then((res) => res.json())
    .then((res) => {
      let pokemones = res.pokemon;
      const contenedor = document.getElementById("tarjeta2");
      pokemones.forEach((pokemon) => {
        let bloque = document.createElement("div");
        bloque.id = `tarjeta-${pokemon.name}` 
        bloque.classList.add("bloquePokemones");
        bloque.classList.add(`pokemon-${pokemon.type[0]}`);
        bloque.innerHTML = `<div class="bloquetransparente"> <h2 class="letrastarjetas" > ${pokemon.name}
        </h2> <img src="${pokemon.img}"> <div> <img id="boton-tipos" src=./img/iconos/${pokemon.type[0]}.png>
        </div> <h2 class="letrastarjetas">${pokemon.num} </div>`;
        contenedor.appendChild(bloque);

        let tarjeta = document.getElementById(`tarjeta-${pokemon.name}`)
        const action = () => {
        document.getElementById("tarjeta2").style.display = "none"
        let pokemonDescripcion = document.getElementById("tarjeta3")
          pokemonDescripcion.innerHTML= `<h1>aprobado</h1>`
      }
        tarjeta.addEventListener("click",action)
        
      });
    })
    .catch((err) => console.error(err));
};

let botonPokemon = document.getElementById("pokemon")

botonPokemon.addEventListener("click", () => {
  document.getElementById("pokebola-img").setAttribute("style", "display:none");
  document.getElementById("tarjeta1").setAttribute("style", "display:none").innerHTML = getData();
})

