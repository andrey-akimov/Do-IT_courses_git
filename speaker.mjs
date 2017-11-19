import Person from './person.mjs';

class Speaker extends Person {
    say(phrase) {
        console.log(`"${super.say(phrase)}" very very confidently`);
    }
    jump(times) {
        console.log(super.jump(times));
    }
}

let john = new Person('John');
john.say('Hello!'), john.jump(1);

let bob = new Speaker('Bob');
bob.say('Hi!'), bob.jump(3);
