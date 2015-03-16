class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = this.currentTime;
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = this.currentTime, 1000);
        throw "a fit!";
    }

    stop() {
        clearTimeout(this.timerToken);
    }

    get currentTime(): string {
        return new Date().toLocaleTimeString();
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};