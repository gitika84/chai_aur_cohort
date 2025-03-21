
// modify this function

function prepareChai( type ){
    if(type === "Masala Chai"){
        console.log("Adding spices to the chai")
    } else {
        console.log("preparing regular chai")
    }
}

// prepareChai("Masala Chai")

/* 
 Ek online store mein agar customer ka total bill amoungt 1000 se zyada hai, toh 10% discount milta hai. Nahi toh , full amount pay karna padta hai.
*/

function calculateBill ( amount ){
    Number(amount)
    if( amount >= 1000){
        // rateDis = amount / 100 * 10
        // Totalamount = amount - rateDis
        // console.log(` Your Amount After 10% Discount ${Totalamount}`)
        return amount * 0.9
    } else {
        // console.log(` Your Amount : ${ amount }`)
        return amount
    }
}
// calculateBill( "1000" )

let finalBill = calculateBill(1000)
// console.log(finalBill)

/* Ek traffic light system mein, agar light "red" hai , toh "stop" print karo. Agar "yellow" hai , toh "slow down" karo. Agar "green" hai , toh "Go" print karo. */


function trafficLight( Light ) {
    switch(Light){
        case "red":
            console.log("STOP");
            break;
        case "yellow":
            console.log('SLOW DOWN');
            break;
        case "green":
            console.log("GO");
            break;
    }
}

// trafficLight("red")

function checktruthyValue(value){
    if(value){
        console.log("Truthy")
    } else {
        console.log("Falsy")
    }
}

checktruthyValue(1)
checktruthyValue(0) // falsy
checktruthyValue("") // falsy
checktruthyValue([""])
checktruthyValue("get")

function login(username , password , loginIp){
    if(username === "Geet" && (password === "1234" || loginIp == "127")){
        console.log("Login successful");
    }else{
        console.log("invalid credentials");
    }
}
