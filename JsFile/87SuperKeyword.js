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
    constructor(name,age,speed){
        super(name,age)
        this.speed = speed
    }
    run(){
        return `${this.name} is running at ${this.speed}.`
    }
}

const rocky = new Dog("Rocky", 2 ,18)
console.log(rocky)
console.log(rocky.run())

