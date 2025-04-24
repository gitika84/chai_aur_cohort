// The promise object represent eventual completion of asyncronous operation and its resulting value

const items = document.getElementById("items")

fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
    .then((response) => {
        response.json().then((obj) => {
            console.log(obj)
        })
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("Always in the game")
    })
    