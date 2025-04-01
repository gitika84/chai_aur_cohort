
// for(variable in object)

let arr = [1,2,3,4,5,6]

for (const key in arr) {
   console.log(key)
}

// if we use for in loop in an array then it returns the index of an array

let obj = {
    name : "Geet",
    job: "software Developer",
    company: "microsoft"
}

for(let key in obj){
    console.log(obj[key])
} // it doesn't support dot operator here only use breakets


