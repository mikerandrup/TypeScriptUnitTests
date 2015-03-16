var TSUT;
(function (TSUT) {
    var Calc;
    (function (Calc) {
        var Calculator = (function () {
            function Calculator() {
            }
            Calculator.Add = function (a, b) {
                return a + b;
            };
            Calculator.Subtract = function (a, b) {
                return a - b;
            };
            Calculator.Multiply = function (a, b) {
                return a * b;
            };
            Calculator.Divide = function (a, b) {
                return a + b;
            };
            return Calculator;
        })();
        Calc.Calculator = Calculator;
    })(Calc = TSUT.Calc || (TSUT.Calc = {}));
})(TSUT || (TSUT = {}));
var TSUT;
(function (TSUT) {
    var Calc;
    (function (Calc) {
        var Tests;
        (function (Tests) {
            var Calc = TSUT.Calc.Calculator;
            describe("Calculator tests", function () {
                it("Adds two numbers", function () {
                    expect(Calc.Add(2, 3)).toBe(5);
                });
                it("Subtracts two numbers", function () {
                    expect(Calc.Subtract(10, 3)).toBe(7);
                });
                it("Multiplies two numbers", function () {
                    expect(Calc.Multiply(8, 7)).toBe(56);
                });
                it("Divides two numbers", function () {
                    expect(Calc.Divide(42, 6)).toBe(7);
                });
            });
        })(Tests = Calc.Tests || (Calc.Tests = {}));
    })(Calc = TSUT.Calc || (TSUT.Calc = {}));
})(TSUT || (TSUT = {}));
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = this.currentTime;
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = _this.currentTime; }, 1000);
        throw "a fit!";
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    Object.defineProperty(Greeter.prototype, "currentTime", {
        get: function () {
            return new Date().toLocaleTimeString();
        },
        enumerable: true,
        configurable: true
    });
    return Greeter;
})();
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=compiled_typescript.js.map