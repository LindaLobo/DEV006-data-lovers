import { hola } from "./data.js";
// import data from './data/pokemon/pokemon.js';
//import pokemones from './data/pokemon/pokemon.js';

export let getData = () => {
  fetch("./data/pokemon/pokemon.json")
    .then((res) => res.json())
    .then((res) => {
      let pokemones = res.pokemon;
    
      // filter
      document.getElementById("tarjeta1").innerHTML = `
          <div class="filter">
          <button class="filter-btn">Filter</button>
          <div class="filter-content">
          
          <button class="botonesTipo" id="grass"> grass </button>
          <button class="botonesTipo" id="poison" > poison </button>
          <button class="botonesTipo" id="fire"> fire </button>
          <button class="botonesTipo" id="flying"> flying </button>
          <button class="botonesTipo" id="water"> water </button>
          <button class="botonesTipo" id="bug"> bug </button>
          <button class="botonesTipo" id="electric"> electric </button>
          <button class="botonesTipo" id="groung"> groung </button>
          <button class="botonesTipo" id="fighting"> fighting </button>
          <button class="botonesTipo" id="psychic"> psychic  </button>
          <button class="botonesTipo" id="rock"> rock  </button>
          <button class="botonesTipo" id="ice">  ice </button>
          <button class="botonesTipo" id="ghost"> ghost </button>
          <button class="botonesTipo" id="normal"> normal </button>
          <button class="botonesTipo" id="steel"> steel</button>
          <button class="botonesTipo" id="dragon"> dragon </button>
          <button class="botonesTipo" id="fairy"> fairy </button>
          <button class="botonesTipo" id="fire"> dark </button>
          </div>
        </div>`;



       //let pokemonesfiltrados = hola(pokemones)
        //let botonclikeado= document.getElementById("water")
        let botonclikeado= document.querySelectorAll(".botonesTipo")
        console.log(botonclikeado)
        //botonclikeado.addEventListener("click", hola(pokemones))

        botonclikeado.forEach((boton) =>{
            boton.addEventListener("click",(e) =>{
                hola(pokemones, e.target.id)
            })
        })

        

        const dataPokemon = JSON.parse( localStorage.getItem("filtro")) || ""
        console.log({dataPokemon})
       const print = dataPokemon ? dataPokemon: pokemones
      const contenedor = document.getElementById("tarjeta2");
      contenedor.innerHTML = "";
      print.forEach((pokemon) => {
        //se crea un div por cada pokemon y se agrega una clase
        let bloque = document.createElement("div");
        bloque.id = `tarjeta-${pokemon.name}`;
        // clase para dar estilo al div
        bloque.classList.add("bloquePokemones");
        //clase para agregar imagen segun el tipo de pokemon
        bloque.classList.add(`pokemon-${pokemon.type[0]}`);
        // creacion de las tarjetitas de los pokemones 
        bloque.innerHTML = `<div class="bloquetransparente"> <h2 class="letrastarjetas" > ${pokemon.name}
        </h2> <img src="${pokemon.img}"> <div> <img id="boton-tipos" src=./img/iconos/${pokemon.type[0]}.png>
        </div> <h2 class="letrastarjetas">${pokemon.num}</h2> </div>`;
        //al contenedor le agrego como hijo los div (asigno donde quiero que este)
        contenedor.appendChild(bloque);

        // tarjeta dos descripcion de los pokemones 
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
    


           document.getElementById("tarjeta2").innerHTML = "";
           let pokemonesFiltrados = document.getElementById("tarjeta2")
           pokemonesFiltrados.innerHTML = pokemonFiltrado
          };
        tarjeta.addEventListener("click", action);
      });
      
    })
    .catch((err) => console.error(err));
};

let botonPokemon = document.getElementById("pokemon");


botonPokemon.addEventListener("click", () => {
  document.getElementById("pokebola-img").setAttribute("style", "display:none");
  document.getElementById("tarjeta1");
  localStorage.removeItem("filtro");
  getData();

});


