import Person from './person.mjs';

class Speaker extends Person {
    say(phrase) {
        console.log(`"${super.say(phrase)}" very very confidently`);
    }
}

let john = new Person('John');
console.log(john.say('Hello!'));

let bob = new Speaker('Bob');
console.log(bob.say('Hi!'));
