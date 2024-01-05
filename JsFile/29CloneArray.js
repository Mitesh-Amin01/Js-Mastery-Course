//How to Clone Array

let array1 = [1,2,3,4,5]
let array2 = array1
console.log(array1===array2)

//How to Clone Array
console.log("How to Clone Array Method 1 :-")
let array3 = [1,2,3,4,5]
let array4 = [1,2,3,4,5]

console.log(array3===array4)

console.log("How to Clone Array Method 2 faster then All:-")
let array5 = [1,2,3,4,5]

let array6 = array5.slice(0)

console.log(array5===array6)

console.log("How to Clone Array Method 3 :-")

let array7 = [1,2,3,4,5]

let array8 = [].concat(array7)

console.log(array7===array8)

console.log("How to Clone Array Method 4 New Way:-")

let array9 = [1,2,3,4,5]

let array10 = [...array9]

console.log(array9===array10)


//How to Concatenate Two Array

console.log("How to Concatenate Two Array Method 1 :-")
array2 = array1.slice(0).concat([6,7,8])

console.log(array2)

console.log("How to Concatenate Two Array Method 2 New Way:-")
let arr1 = [...array1,"hello","String",1999,...array2]
console.log(arr1)