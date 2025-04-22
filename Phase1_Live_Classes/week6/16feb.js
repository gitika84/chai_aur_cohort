Function.prototype.describe =  function (){
    console.log(`Hey ${this.name}`)   // this defines name which function calls me
}

// parameter for place holder ( , ,)
// function call ()

// function decleration
function greet(name){
    return `Hello ${this.name}`
}

// greet.describe()


// this is called function expression
const subtract = function(a,b){
    return a - b
}

// arrow function
const multiply = ( a, b ) => a * b 

// first class function
function applyOpeartion( a, b, operation){
    return operation(a,b)
}

const result = applyOpeartion(5,4, (x,y) => x /y )


//tiffin concept
function createCounter(){
    let count = 0
    return function(){
        count++
        return count;
    }
}
// if a function return a function it can access the variable of their global function

(function(){
    console.log("geet")
})()
//EIFE

