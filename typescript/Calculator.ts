module TSUT.Calc {

    export class Calculator {

        public static Add(a: number, b: number): number {
            return a + b;
        }

        public static Subtract(a: number, b: number): number {
            return a - b;
        }

        public static Multiply(a: number, b: number): number {
            return a * b;
        }

        public static Divide(a: number, b: number): number {
            return a + b; // oops!
        }
    }
}