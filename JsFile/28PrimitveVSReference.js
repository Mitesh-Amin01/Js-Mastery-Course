// primitive vs reference data type

// Primitive DataType
let num1 =10
let num2 = num1

console.log("Value is num1 is :- ",num1)
console.log("Value is num2 is :- ",num2)

num1++

console.log("After Incrementing")
console.log("Value is num1 is :- ",num1)
console.log("Value is num2 is :- ",num2)


// Reference DataType
let arr1 = ["item1","item2"]
let arr2 = arr1

console.log("Value is arr1 is :- ",arr1)
console.log("Value is arr2 is :- ",arr2)

arr1.push("Item3")

console.log("After Incrementing")
console.log("Value is arr1 is :- ",arr1)
console.log("Value is arr2 is :- ",arr2)


// Primitive DataType Store in Memory
// Store in Stack
// LIFO(Last In First Out)
//                     __________________
//address x4 diffrent |________5_________|
//address x3 diffrent |________4_________|
//address x2 diffrent |________3_________|
//address x1 diffrent |________1_________|<----Pointer num2 is not change
//address x0 diffrent |________1_________|<----Pointer num1++ change only num1 2


// Reference DataType Store in Memory
// Store in Heap
// Same Address Both Array
// Memory in Only One Address
// Both Pointer

//                   __________________               __________________
//address           |________5_________|             |                  |
//address           |________4_________|             |                  |
//address           |________3_________|             |["item1","item2"] | 0x01
//Same address 0x01 |________1_________| -------->   |                  |
//Same address 0x01 |________1_________| -------->   |__________________|       


 