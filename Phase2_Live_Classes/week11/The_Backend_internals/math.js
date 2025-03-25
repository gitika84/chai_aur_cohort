function add(x,y){
    return x + y;
}

function sub(a,b){
    return a - b;
}
// exports.add = add;
// exports.sub = sub;

// named exports

// exports.add = function(x,y){
//     return x + y;
// }

// exports.sub = function(a,b){
//     return a - b;
// }

// there is only one module.exports in a file
// this is a default exports
module.exports = { add , sub}
