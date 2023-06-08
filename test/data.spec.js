import { obtenerPokemon, getData, ordenar } from "../src/data.js";
import pokemon from "../src/data/pokemon/pokemon.js";

describe("Pokemones", () => {
  describe("Funcion para obtener todos los Pokemones", () => {
    it("La respuesta deberia ser del tipo object", async () => {
      const res = await getData();
      expect(typeof res).toBe("object");
    });
    it("El nombre del pokemon deberia ser bulbasour", async () => {
      const res = await getData();
      expect(res[0].name).toBe("bulbasaur");
    });
    it("cantidad de pokemones en el array", async () => {
      const res = await getData();
      expect(res.length).toBe(251);
    });
  });

  describe("ordenado de pokemones", () => {
    it("debería ser una función", async () => {
      const res = await ordenar();
      expect(typeof res).toBe("object");
    });
    it('al ordenarlos deberia mostrar un pokemon que comience por a"', async () => {
      const orden = await ordenar(pokemon);
      // console.log(orden)
      expect(orden[0].name).toBe("abra");
    });
    it('deberia mostrar el ultimo pokemon que comience por z"', async () => {
      const orden = await ordenar(pokemon);
      // console.log(orden)
      expect(orden[250].name).toBe("zubat");
    });
    it('deberia mostrar los tres primeros pokemones"', async () => {
      const orden = await ordenar(pokemon);
      const organizado = orden.slice(0, 3);
      const newArray = organizado.map((pokemon) => pokemon.name);
      // console.log(newArray)
      expect(newArray).toBe[("abra", "aerodactyl", "aipom")];
    });
  });

  describe("Funcion para obtener los Pokemones", () => {
    it("debería mostrar el nombre del pokemon indicado", async () => {
      const obtener = await obtenerPokemon("bulbasaur");
      // console.log(obtener);
      expect(obtener.name).toBe("bulbasaur");
    });
    it("debería mostrar el pokemon y su tipo", async () => {
      const obtener = await obtenerPokemon("pikachu", "electric");
      // console.log(obtener);
      expect(obtener.name && obtener.type).toBe[{ name: "pikachu", type: ["electric"] }];
    });
  });

});
