const fs = require('fs');
const math = require("./math")
const { add , sub} = require('./math')

fs.writeFile('./test.txt', 'Hello World' , () => {} )

// console.log({ __dirname, __filename})

console.log(math.add(2,4))
console.log(add(3,6));
console.log(sub(8,4))


function __require(id){
    // .. agar id . se start hai toh user ki dir mei code ko dhundo
    // .. khud ke internal module mi dhundo
}
