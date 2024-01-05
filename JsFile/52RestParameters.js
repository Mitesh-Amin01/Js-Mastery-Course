// Rest Parameters

const add = (a,b,...c) => console.log("A :-",a,"B :-",b,"C :-",c)

console.log(add(1,2,3,4,5))


const addAll = (...a)=>{
    let total = 0
    for(let num of a){
        total=total+num
    }
    console.log(total)
}

addAll(1,2,3,4,5)