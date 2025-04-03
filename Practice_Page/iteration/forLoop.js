 
// forLoop - it works untill a specific condition said to be false

// forLoop - syntax

// for(initialization ; condition ; increment ){
//     statement
// }

function countSelected(selectObject){
    let numberSelected = 0;
    for(let i = 0; i < selectObject.options.length; i++){
        if(selectObject.options[i].selected){
            numberSelected++
        }
    }
    return numberSelected
}

const btn = document.getElementById("btn")

btn.addEventListener("onclick" , () => {
    const musicType = document.selectForm.musicType;
    console.log(`you have selected ${countSelected(musicType)} options.`)
})


function findL(totalgifts , friends){
    if(totalgifts > friends){
        for (let i = 0; i < friends.length; i++) {
            friends++
        }
        return friends;
    }else if( totalgifts < friends){
        for (let i = 0; i < totalgifts.length; i++) {
            totalgifts++
        }
        return totalgifts
    }
    
}

console.log(findL(4,2))
console.log(findL(2,9))


function boxCount(giftBox , chocoBar){
    let totalBox = Math.floor((chocoBar / giftBox))
    console.log(totalBox);
}

boxCount(5 , 17 )


function Days(days){
    let count = 0
    for(let i = 0 ; i < days.length; i++){
        if(days[i] == ("Saturday" || " Sunday")){
            return ` ${days[i]} is not a working day`
        }
        count++
    }
    return count
}

console.log(Days(["Monday", "wednesday" , "Friday"]))

function countStar( arr ){
        let arr2 = arr.flat(4)
        let count = 0
        for(let i =0 ; i  < arr2.length; i++){
            count++
        }
}

// console.log(countStar[[*,*,*],[*,*],[*]])

function totalPrices(prices){
    let totalP = 0
    for(let i = 0; i < prices.length; i++){
        totalP = totalP + prices[i]
    }
    return totalP
}

console.log(totalPrices([1,2,3,4]))


