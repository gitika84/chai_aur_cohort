const txtArea = document.getElementById("txt-area")
const saveBtn = document.getElementById("save-btn")
const list = document.getElementById("list")

saveBtn.addEventListener('click', () => {
    let value = txtArea.value
    const newDiv = document.createElement('div')
    newDiv.innerText = value
    list.appendChild(newDiv)

    
})