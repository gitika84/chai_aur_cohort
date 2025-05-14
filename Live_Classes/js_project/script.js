const btn = document.getElementById("add-btn")
const items = document.getElementById("items")

btn.addEventListener("click", () =>{
    let userInput = prompt("Enter Task")
    let item = document.createElement("p")
    item.className = "item"
    item.innerText = userInput
    items.appendChild(item)

})


const allBoards = document.querySelectorAll(".board")

allBoards.forEach(board => {
    board.addEventListener('dragover', () => {
        console.log("kuch toh gya")
    })
})