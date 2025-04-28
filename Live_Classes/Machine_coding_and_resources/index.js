// polyfills of foreach
if(!Array.prototype.myforEach){
    Array.prototype.myforEach = function (cb){
        for(let i = 0 ; i < this.length ; i++){
            cb(this[i] , i)
        }
    }
}

const arr = [1,2,3,4]

arr.myforEach((value ,index ) => {
    console.log(`At Index: ${index} Value: ${value}`)
})

// polyfill of map

if(!Array.prototype.mymap){
    Array.prototype.mymap = function(cb){
        const result = []
        for(let i = 0 ; i < this.length ; i++){
           let value = cb(this[i] , i)
           result.push(value)
        }
        return result
    }
}

let arr2 = arr.mymap((value) => value * 2)
console.log(arr2)

// ployfill of reduce

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function (cb , initialValue = undefined){
        if(!initialValue){
            let acc = this[0]
            for (let i = 1; i < this.length; i++) {
              acc = cb(acc , this[i])
            }
            return acc
        }


        let acc = initialValue;
        for (let i = 0; i < this.length; i++) {
            acc = cb(acc , this[i])   
        }
        return acc
    }
}

let result = arr.myReduce((acc , curVal) => acc + curVal )
console.log(result)