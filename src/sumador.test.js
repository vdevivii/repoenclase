import sumar from "./sumador.js";
import mult from "./mult.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});

describe("Multiplicar", () => {
  it("deberia mult dos numeros", () => {
    expect(mult(3, 2)).toEqual(6);
  });
});
