import { getData } from "../src/data.js";

describe("data de pokemones", () => {
  it("deberia ser un array", () => {
    expect(typeof getData()).toBe("pokemon");
  });
});

// describe('getData', () => {
//   it('is a function', () => {
//     expect(typeof getData).toBe('function');
//   });

//   it('returns true `pikachu`', () => {
//     expect(getData("pikachu")).toBe(true);
//   });
// });

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
