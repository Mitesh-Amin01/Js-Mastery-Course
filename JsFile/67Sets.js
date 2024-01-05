const numbers =[1,2,3]

// Sets (it is iterable)
// store data 
// unique items only (no duplicates allowed)
const numSet = new Set([1,2,3,4,5,5])

console.log(typeof numSet," ", "Value of numSet :-",numSet)

// No index-based access 
// Order is not guaranteed

console.log(numSet[0])//undefined

// sets also have its own methods

const numSet1 = new Set()


numSet1.add(1)
console.log(numSet1)

numSet1.add("item1")
console.log(numSet1)

numSet1.add("String")
console.log(numSet1)

numSet1.add(true)
console.log(numSet1)

numSet1.add(['Item3',"item2"]) // diffrent array in memory
console.log(numSet1)

numSet1.add(['Item3',"item2"]) // diffrent array in memory
console.log(numSet1)

numSet1.add(numbers) // same array
numSet1.add(numbers) // same array

console.log(numSet1)

// check item in set 
// return true and false

console.log(numSet1.has("item1"))

// return true and false
const deleteItem=numSet1.delete("item1")
console.log(numSet1)
console.log(deleteItem)

numSet1.forEach((e)=> console.log(`Element is a ${e}.`))

const myArray = [1,1,2,3,4,5,5,6,6,6,7]

const uniqueElements = new Set(myArray)

console.log(uniqueElements)
console.log(uniqueElements.size)





