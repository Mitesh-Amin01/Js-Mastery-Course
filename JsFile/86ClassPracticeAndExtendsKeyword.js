class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        return `${this.name} is Eating`
    }
    isSuperCute() {
        return this.age <= 1
    }
    isCute() {
        return true
    }
}


class Dog extends Animal {
}

const animal = new Dog("Rocky", 2)
console.log(animal)
console.log(animal.eat())
console.log(animal.isCute())
console.log(animal.isSuperCute())

const dog1 = new Dog("Salar",1)

console.log(dog1)
console.log(dog1.eat())
console.log(dog1.isCute())
console.log(dog1.isSuperCute())

// object called instance other programing language
