// Splice Method

// Start, delete, insert

const myArray = ["item1","item2","item3","item4"]

const deletedItem = myArray.splice(1,1)

console.log("Deleted Items",deletedItem)

console.log(myArray)

myArray.splice(2,0,"inserted Item")

console.log(myArray)

myArray.splice(0,1,"Inserted Item1","Inserted Multipal Item")

console.log(myArray)

const deletedItem1=myArray.splice(0,3)

console.log(myArray)

console.log("Deleted Items",deletedItem1)