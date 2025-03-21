let salesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smartphone" , price: 800 },
    { product: "Headphones" , price: 150 },
    { product: "Keyboard" , price: 80 },
];

let totalSales = salesData.reduce((acc , curVal) => {
    return acc + curVal.price
},0)

// console.log(totalSales)

// piping ek k bad ek method use karna

// "Geet".toUpperCase().indexOf()


let inventory = [
    { name: "Widget A" , stock: 30},
    { name: "Widget B" , stock: 120 },
    { name: "Widget C" , stock: 45 },
    { name: "Widget D" , stock: 70 },
];

let lowStockItems = inventory.filter((items) => items.stock < 50 )
// console.log(lowStockItems)

let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 72 },
    { user: "Charlie", activityCount: 33 },
];

// find most active user
// currentValue array me har ek index k pass jati hai 
// accoumulator agar defined na ho  toh usski first value array[0] hoti hai

let mostActiveUser = userActivity.reduce((maxUser , user) => {
   return user.activityCount > maxUser.activityCount ? user : maxUser
})

console.log(mostActiveUser)

