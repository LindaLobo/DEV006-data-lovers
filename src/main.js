// import Chart  from "/node_modules/chart.js/dist/chart.js";
import { getData, filtroPokemon, ordenar, obtenerPokemon } from "./data.js";

export const dataPokemones = async () => {
  const pokemones = await getData();

  // filter
  document.getElementById("tarjeta1").innerHTML = `  
        <div id="botones-submenu">
          <div>
            <button id="btn-ordenar">Ordenar</button>
          </div> 
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
                <button class="botonesTipo" id="dark"> dark </button>
              </div>
            </div>
        </div>
        </div>
        
        <div id="tarjeta-ordenada">         
          <p id="demo"></p>
        </div>`;

  //BOTON DE ORDENAR
  const botonOrdenar = document.querySelector("#btn-ordenar");

  botonOrdenar.addEventListener("click", async () => {
    const organizar = await ordenar();
    // console.log(organizar);
    let text = "";
    organizar.forEach((value) => {
      text += `<div class="bloquetransparente pokemon-${value.type[0]}" id="tarjeta-${value.name}" style="margin:10px;"> 
          <h2 class="letrastarjetasorden"> ${value.name}</h2> 
          <img src="${value.img}"> 
          <div>
          <img id="boton-tipos" src=./img/iconos/${value.type[0]}.png>
        </div> 
        </div>`;
    });
    document.getElementById("demo").innerHTML = text;
    document.getElementById("tarjeta2").innerHTML = "";
  });

  //BOTON DE FILTER
  const botonclikeado = document.querySelectorAll(".botonesTipo");

  botonclikeado.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      filtroPokemon(pokemones, e.target.id);
    });
  });

  //CUERPO
  const dataPokemon = JSON.parse(localStorage.getItem("filtro")) || "";
  const muestra = dataPokemon ? dataPokemon : pokemones;
  document.getElementById("tarjeta3").innerHTML = "";
  const contenedor = document.getElementById("tarjeta2");
  contenedor.innerHTML = "";
  muestra.forEach((pokemon) => {
    //se crea un div por cada pokemon y se agrega una clase
    const bloque = document.createElement("div");
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
    const tarjeta = document.getElementById(`tarjeta-${pokemon.name}`);
    const action = () => {
      document.getElementById("tarjeta2").innerHTML = "";
      const pokemonDescripcion = document.getElementById("tarjeta2");
      pokemonDescripcion.innerHTML = ` <div class="transparencia "><div class= "pokemon-${pokemon.type[0]} "> 
          <h2 class="tittle">${pokemon.name} 
          </h2> <div class="tarjeta3"><img src="${pokemon.img}">
          <div class="fondoCaracteristicas"><p>  ${pokemon.about}  <br>  type: ${pokemon.type} <br>
           city: ${pokemon.generation.name} <br> num:  ${pokemon.num} <br>
           resistant: ${pokemon.resistant} <br> weaknesses: ${pokemon.weaknesses} </p></div> </div> </div> </div>`;
    };
    tarjeta.addEventListener("click", action);
  });
};

//BOTON DE POKEMONES

const botonPokemon = document.getElementById("pokemon");

botonPokemon &&
  botonPokemon.addEventListener("click", () => {
    document
      .getElementById("pokebola-img")
      .setAttribute("style", "display:none");
    document.getElementById("tarjeta5").innerHTML = "";
    document.getElementById("tarjeta4").innerHTML = "";
    localStorage.removeItem("filtro");
    dataPokemones();
  });

//COMPARACIONES
const botonCuadro = document.getElementById("comparaciones");

botonCuadro &&
  botonCuadro.addEventListener("click", () => {
    document
      .getElementById("pokebola-img")
      .setAttribute("style", "display:none");
    document.getElementById("tarjeta2").innerHTML = "";
    document.getElementById("tarjeta1").innerHTML = "";
    document.getElementById("tarjeta5").innerHTML = `
    <div style="width:400px">
        <canvas id="myChart"></canvas>
    </div>  
    
  `;
    document.getElementById("tarjeta4").innerHTML = `
  <div id="container">
        <h2>Obtener la información detallada del pokemon</h2>
        <div style='display:flex; justify-content:center;'>
     
        <input type="text" id="buscador" class="form-control" placeholder="Ingresa tu pokemon">
        
        <button type="button" id="search" class="btn btn-primary">Enviar</button>
        </div>    
        
    </div>
    <div id="recuadro">
    </div>
  `;

    //BUSQUEDA DE POKEMONES
    const buscar = document.getElementById("search");

    let myChart;
    buscar &&
      buscar.addEventListener("click", async () => {
        const nombre = document.getElementById("buscador").value;
        // console.log(nombre);
        const detalle = await obtenerPokemon(nombre);
        // console.log(detalle.stats);
        // matriz de clave-valor
        const statsPropiedades = [];
        const statsValores = [];
        for (const key in detalle.stats) {
          statsPropiedades.push(key);
          statsValores.push(detalle.stats[key]);
        }
        // console.log(statsPropiedades);
        // console.log(statsValores);

        //Calculo Agregado:
        const potencia = statsValores.reduce((acumulador, item) => {
          return acumulador + parseInt(item);
        }, 0);

        document.getElementById("recuadro").innerHTML = `
    <h3>Información Pokemon ${detalle.name}</h3>
    <h4>EGGS: ${detalle.egg}</h4>
    <h4>POTENCIA de ${detalle.name}: ${potencia}</h4>
    <p>Leyenda:</p> 
    <p>
    base-attack = Ataque <br>
    base-defense = Defensa <br>
    base-stamina = Resistencia <br>
    max-cp = Puntos Máximos de Combate <br>
    max-hp = Potencia de Combate Máxima
    </p>
`;

        // grafico
        const ctx = document.getElementById("myChart");
        ////OJOLEEEE
        // let Chart;
        if (myChart) {
          myChart.destroy();
        }

        myChart = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: statsPropiedades,
            datasets: [
              {
                label: `Información Pokemon ${detalle.name}`,
                data: statsValores,
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                  "rgb(142, 68, 173)",
                  "rgb(70, 173, 68)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      });
  });

//BOTONES DE EVENTOS
const botonEventos = document.getElementById("eventos");

botonEventos &&
  botonEventos.addEventListener("click", () => {
    document
      .getElementById("pokebola-img")
      .setAttribute("style", "display:none");
    document.getElementById("tarjeta2").innerHTML = "";
    document.getElementById("tarjeta3").innerHTML = "";
    document.getElementById("tarjeta1").innerHTML = "";
    document.getElementById("tarjeta4").innerHTML = "";
    document.getElementById("tarjeta5").innerHTML = `
  <div class="wrapper">
    <div>
      <div class="container-uno">
        <img class="imagen-comunidad" src="./img/imagenes/ash.png"/>
        <div class="centered">Ahora que el último Día de la comunidad de la temporada 9: Mythical Wishes ha quedado atrás, ¡nos gustaría compartir las fechas
        del Día de la comunidad de la próxima temporada!.</div>
      </div>
  </div>
    <div>
      <div class="container-dos">
        <img class="imagen-parque" src="./img/imagenes/pokemon-wonder.jpg"/>
        <div class="centered">POKEMON WONDER es un proyecto de reciente
        creación que pretende ofrecer una experiencia Pokémon completamente inédita.</div>
      </div>
    </div>
  </div>`;
  });
