// array push pop
// array shift unshift

let fruits = ["apple","mango","graps"]

console.log(fruits)


// push

fruits.push("banana")
console.log(fruits)


//pop
// pop return pop element
console.log(fruits.pop())
console.log(fruits)

// unshift
// add element in starting

fruits.unshift("banana")
fruits.unshift("Stobery")
console.log(fruits)


//shift
// shift return shift element
console.log(fruits.shift())
console.log(fruits)

// Push/Pop is faster then Shift/Unshift

// Shift/Unshift is load first in memory and shift+1 and perform add and delete task
