function ptaNhi(fn , delay){
    console.log(arguments)
    console.log(typeof arguments) // object

    let myId;
    return function (){
       let myId = setTimeout(() => {
            fn()
        } , delay)
    }
}

// call - 
// bind - return a new function
// apply - when we talk about array

ptaNhi("get", 1)