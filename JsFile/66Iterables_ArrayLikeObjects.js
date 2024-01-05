// iterables 
// jispe hum for of loop laga sakein
// string , array are iterable 


const myName = "mitesh"

for(let char of myName ){
    console.log(char)
}

const myArray = [1,2,3,4,5,6,7,8]

myArray.forEach((char,index)=>{
    console.log("Char :-",char," ","Index :-",index)
})

//const users = {key1:"value1",key2:"value2",key3:"value3",key4:"value4"}

// for(let user of users){
//     console.log(user)
// } not iterable

// array like object 

const str = "mitesh"
console.log(str[2])

// jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai
// example :- string 