/// <reference path="../typescript/calculator.ts" />
/// <reference path="typings/jasmine/jasmine.d.ts" />
module TSUT.Calc.Tests {

    import Calc = TSUT.Calc.Calculator;

    describe("Calculator tests", () => {

        it("Adds two numbers", () => {
            expect(Calc.Add(2, 3)).toBe(5);
        });

        it("Subtracts two numbers", () => {
            expect(Calc.Subtract(10, 3)).toBe(7);
        });

        it("Multiplies two numbers", () => {
            expect(Calc.Multiply(8, 7)).toBe(56);
        });

        it("Divides two numbers", () => {
            expect(Calc.Divide(42, 6)).toBe(7);
        });

    });

}