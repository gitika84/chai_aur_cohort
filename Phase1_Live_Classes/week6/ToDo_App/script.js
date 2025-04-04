const addBtn = document.getElementById("add-btn")
const todoInput = document.getElementById("todo-input")
const todoItems = document.getElementById("todo-items")

addBtn.addEventListener("click", () => {

    if(todoInput.value === ""){
        alert("Write Something")
        li.remove()
    }
    const value = todoInput.value
    const li = document.createElement('li')

    li.innerText = value

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "X"
    li.appendChild(deleteBtn)

    deleteBtn.addEventListener("click" , () => {
        li.remove()
    })
    

    todoItems.appendChild(li)

    todoInput.value = ""

})