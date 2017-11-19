export default class Person {
    constructor(name) {
        this.name = name;
    }

    say(phrase) {
        return `${this.name} says ${phrase}`;
    }

    jump(times) {
        return `And jump ${times} time(s)`;
    }
}
