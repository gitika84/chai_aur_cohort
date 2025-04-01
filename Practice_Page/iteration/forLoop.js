 
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