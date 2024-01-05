// how to iterate object

const objs = {
    name : "Mitesh",
    age : "5",
    "person hobbies" : ["singing"]
}

// for in loop
// key print
for(let obj in objs){
    console.log(obj)
}
console.log("With Value :-")
for(let obj in objs){
    console.log(obj,":",objs[obj])
}

// object.key

console.log(Object.keys(objs))
console.log(Object.values(objs))

for( let obj of Object.keys(objs)){
    console.log(objs[obj])
}
