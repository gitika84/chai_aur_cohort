
function increment() {
    let count = 0
    // closure function ( function binded by its lexical scope)
    return function(){
        count++
        return count;
    };
}

let f = increment()
console.log(f())
console.log(f())
console.log(f())
console.log(f())
console.log(f())



function test(){
    let obj = { value : 10 }
    return function (){
        console.log(obj)
    }
}

const innerfn = test()

innerfn()

