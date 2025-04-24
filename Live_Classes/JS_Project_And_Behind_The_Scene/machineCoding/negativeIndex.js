

// proxy concept -/ if we want user doesnot access our password or if we dont want that directly talk to the object we make a proxy object

const user = {
    name : "alex",
    age : 40,
    password : "123",
}

// const proxyUser = new Proxy(user, {
//     get(target , prop){
//         if(prop === "password"){
//             throw new Error("Access Denied")
//         }
//         return target[prop]
//     },
//     // set(target , prop , value){
//     // }
// })

// console.log(proxyUser.password)

function negativeIndex(arr){
    return new Proxy(arr, {
        get( target , prop ){
            const index = Number(prop)
            if(index < 0){
               return target[target.length + index]
            }
            return target[index]
        },
        set(target , prop , value){
            const index = Number(prop)
            if(index < 0 ){
                target[target.length + index] = value
            }else{
                target[index] = value
            }
            return true
        }
    })
}

// get	  The value	        Because you’re reading a value
// set	  true or false  	Because you’re indicating if the write worked

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = negativeIndex(arr)

console.log(arr[-1])
console.log(newArr[-1]);
newArr[-2] = 20
console.log(newArr)

