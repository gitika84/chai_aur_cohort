const fs = require('fs')
const fsv2 = require('fs/promises')

console.log("Start")

// ------------- Modern code -------------------

fsv2.readFile('./Live_Classes/Project_and_Machine_coding_round/hey.txt', 'utf-8')
    .then((content) => fsv2.writeFile('./Live_Classes/Project_and_Machine_coding_round/backup.txt' , content))
    .then(() => fsv2.unlink('./Live_Classes/Project_and_Machine_coding_round/hey.txt'))
    .catch((err) => console.log("Error" , e) )


// ------------ Legacy code ---------------------

fs.readFile('./Live_Classes/Project_and_Machine_coding_round/hey.txt' , 'utf-8' , ( err , content ) => {
    if(err){
        console.log("Error in file Reading", err)
    } else {
        console.log("File Reading Success" , content )
        fs.writeFile('./Live_Classes/Project_and_Machine_coding_round/backup.txt', content, (err) => {
            if(err){
                console.log("Error in write file" , err)
            } else {
                fs.unlink("./Live_Classes/Project_and_Machine_coding_round/hey.txt" , (err) => {
                    if(err) {
                        console.log("Error deleting file", err)
                    }else {
                        console.log("File deleting Successfully")
                    }
                })
            }
        })
    }
})

// this code lead a problem of callback hell so promises is come in the frame



console.log("End")