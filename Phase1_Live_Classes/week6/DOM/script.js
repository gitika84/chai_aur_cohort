// window.document.write("Hello from JS")

function toggle(color){
    document.body.style.backgroundColor = color
}

const darkButton = document.getElementById("btn-bl")
const h2 = document.getElementById("h2-h")
const lightButton = document.getElementById('btn-wl')

darkButton.addEventListener('click', () => {
    toggle('black')
    h2.style.color = 'white'
})

lightButton.addEventListener('click', () => {
    toggle('white')
    h2.style.color = 'black'
})

const theme = document.getElementById("theme-btn")


theme.addEventListener("click" , () => {
    const currentColor = document.body.style.backgroundColor

    if(!currentColor || currentColor == "white"){
        toggle("black")
        h2.style.color = 'white'
    }else{
        toggle("white")
         h2.style.color = 'black'
    }
})