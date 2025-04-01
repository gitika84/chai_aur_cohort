// const teas = [ "Green Tea" , "Black Tea" , "Oolong Tea" , "White Tea" , "Herbal Tea"];
// teas.push("Chemomile Tea")


// const ind = teas.indexOf("Oolong Tea")
// if(ind > -1){
//     teas.splice(ind , 1)
// }


// const caffeinated = teas.filter((caff) => caff != "Herbal Tea")
// console.log(caffeinated)

// console.log(teas.sort())

// for(let i = 0; i < teas.length; i++){
//     console.log(teas[i])
// }

// let count = 0
// for (let i = 0; i < teas.length; i++) {
//     if(teas[i] != "Herbal Tea"){
//         count++
//     }
// }
// console.log(count)

// let newTeas = []
// for(let i = 0 ; i < teas.length; i++){
//     newTeas.push(teas[i].toUpperCase()) 
// }
// console.log(newTeas)

// let mostChar = ""
// for(let i = 0; i < teas.length; i++){
//     if(teas[i].length > mostChar.length){
//         mostChar = teas[i]
//     }
// }
// console.log(mostChar)


// const reversedArray = []
// for(let i = teas.length - 1 ; i >= 0; i--){
//     reversedArray.push(teas[i])
// }
// console.log(reversedArray)

// Objects

const person = {
    x : 10,
    firstName : "Gitika",
    lastName : "Sharma",
    hobbies : ['Coding' , "Dance"],
    isMarried : false,
    getFullName : function(){
        return "Geet"
    },
    address : {
        hno : 1,
        streat : 1,
        countryCode : "IN",
        state : "HR"
    }
}

// console.log(person.hobbies)

const remote = {
    color: "Black",
    brand : "XYZ",
    dimensions : { height : 1 , width : 1},
    turnOff : function(){

    } ,
    volumeUp : function(){

    }
}


let fname = "Geet"
let fname2 = fname  // it copy the variable value
fname2 = "Re"
// console.log(fname2)

let p1 = {
    fname: "geet"
}
let p2 = p1
p2.fname = "MA"

