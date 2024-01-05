// Optional Chaining

const user = {
    firstName : "mitesh",
    //address : {houseNumber:1000}
}
// first check user are exist or not
// user are exist after checking address not exist stop return Undefine
console.log(user?.firstName)
console.log(user?.address?.houseNumber)