
const teas = [ "Green Tea" , "Black Tea" , "Oolong Tea" , "White Tea" , "Herbal Tea"];

teas.push("Chemomile Tea")

//

const ind = teas.indexOf("Oolong Tea")
if(ind > -1){
    teas.splice(ind , 1)
}

// 

const caffeinated = teas.filter((caff) => caff != "Herbal Tea")
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

