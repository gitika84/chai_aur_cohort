// Lexical Scoping and Closures

let fname = "alis"

function sayName(){
    let fname = "Geet"
    console.log(`Inside sayname fn the value of fname is`, fname)
}

sayName()

console.log("value of fname is" , fname)

