const arr = [1,2,3,4,5,6,7,8,9]

Object.prototype.chai = function(){
    console.log("Chai")
}


if(!Array.prototype.fill) {
    // fallback - polyfill - Backup function :- 
    Array.prototype.fill =function () {

    }
}

arr.fill()

const str = "Geet"
str

const obj = { x: 1 , length: 1}
obj.x


// for Each Polyfills



// step 1 : understand the real signature 
// step 2 : is it return something 
// step 3 : 


if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function (userfun){
        const OriginalArr = this

        for(let i = 0; i < OriginalArr.length; i++){
            userfun(OriginalArr[i] , i)
        }
    };
}


arr.myForEach(function(value , index) {
    console.log(`My for each value at Index ${index} is ${value}`)
})

// map - it return a new array and cannot chnage the original array

// signature
// return  - New array

if(!Array.prototype.mymap){
    Array.prototype.mymap = function (userfun){
        const result = []

        for(let i = 0 ; i < this.length; i++){
            const value = userfun(this[i] , i);
            result.push(value)
        }

        return result;
    }
}



// filter - return a new array - it make a array of true values


if(!Array.prototype.myfilter){
    Array.prototype.myfilter = function (userfn) {
        const fill = []

        for (let i = 0; i < this.length; i++) {
           if(userfn(this[i])){
            fill.push(this[i])
           }
        }

        return fill
    }
}

const res = arr.myfilter((value) => value > 5)
console.log(res)
