let arr = [1,2,3,4,5,6]

function enableNegativeIndexing(targetArr){
    return new Proxy(targetArr, {
        set(target , prop , value){
            target[prop] = `${value}😶‍🌫️`
        },
        get(target,prop){
            return target[prop]
        },
    })
}

// if we use spread operator it doesn't change the original array
const ProxyArr = enableNegativeIndexing([...arr])

console.log(arr)

ProxyArr[1] = 33

console.log(arr)
console.log(ProxyArr)
