const chaiTypes = [ "Masala chai" , "Ginger chai" , "Green tea" , "Lemon Tea"]

// console.log(chaiTypes)

// console.log(`Total chai Types: ${chaiTypes.length}`)

chaiTypes.push("Herbal Tea")
let re = chaiTypes.pop()
// console.log(re)

let index = chaiTypes.indexOf("Green tea")
// console.log(index)

// chaiTypes.forEach((chai , index) => {
//     console.log(`${index + 1} : ${chai}`)
// })

let moreChaiTypes = ["Oolong Tea" , "White Tea"]

let allChaiTypes = chaiTypes.concat(moreChaiTypes)

let newChaiTypes = [...chaiTypes , "chamolina Tea"] // ... spread the existing Array
// console.log(newChaiTypes)

// object literals

let chaiRecipe = {
    name: "Masala Chai",
    ingredients : {
        teaLeaves : "Assam Tea",
        milk : "Full Cream Milk",
        sugar : "Browm sugar",
        spices : ["Daalchini" , "Ginger"]
    },
    instruction : "Boil water , add Tea Leaves , Milk , sugar and spices"
}

// console.log(chaiRecipe.ingredients.spices)

let updatedChaiRecepie = {
    ...chaiRecipe,
    // it overwrite the instruction key value
    instruction : "Boil water , add Tea Leaves , Milk , sugar and spices with love"
}

// console.log(updatedChaiRecepie)

let { name , ingredients , myingredients } = chaiRecipe // object destructuring // myingredients is undefined
let [firstChai , secondChai ] = chaiTypes // array destructuring

