const teas = {
    name: "Lemon Tea",
    type: "Green",
    caffine: "low",
}

// console.log(teas.name)
// console.log(teas["type"])

// assign method = add at the bottom of an object

// Object.assign(teas, { add : "color"})

// origin

teas.origin = "Assam"
// console.log(teas);

// teas.caffine = "medium"
// console.log(teas);

// delete teas.type
// console.log(teas);

// console.log("origin" in teas)

// for (let key in teas) {
//     console.log(`${key} AND ${teas[key]}`)
// }

const myTeas = {
    greentea : {
        name: "Green Tea",
        caffine: "Low",
        cups: {
            one : "1",
            two : "2"
        }
    },
    blacktea: {
        name : "Black Tea",
        caffine: "High"
    }
}

const teaCopy = {...teas}

console.log(teaCopy)