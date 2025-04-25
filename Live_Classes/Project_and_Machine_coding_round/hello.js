const fs = require('fs')
const fsv2 = require('fs/promises')

console.log("Start")

//----------- Custom promises  /- Promisified Version ------------------

function readFileWithPromise(filepath , encoding){
    return new Promise((resolve , reject) => {
        fs.readFile(filepath , encoding, (err , content) => {
            if(err){
                reject(err)
            }else{
                resolve(content)
            }
        })
    })
}


function writeFileWithPromise(filepath , content){
    return new Promise((resolve , reject) => {
        fs.writeFile(filepath , content , (err) => {
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

function unlinkWithPromise(filepath){
    return new Promise((resolve , reject) => {
        fs.unlink(filepath, (err) => {
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}


readFileWithPromise('./Live_Classes/Project_and_Machine_coding_round/hey.txt', 'utf-8')
    .then((content) => writeFileWithPromise('./Live_Classes/Project_and_Machine_coding_round/backup.txt' , content))
    .then(() => unlinkWithPromise('./Live_Classes/Project_and_Machine_coding_round/hey.txt'))
    .catch((e) => console.log("Error" , e))
 
// --------- async , await -----------

function wait(seconds){
    return new Promise((resolve , reject) => {
        setTimeout(() => resolve() , seconds * 1000)
    })
}

async function doTask() {
   try{
    const filecontent = await readFileWithPromise('./Live_Classes/Project_and_Machine_coding_round/hey.txt', 'utf-8')
    await writeFileWithPromise('./Live_Classes/Project_and_Machine_coding_round/backup.txt' , filecontent)
    await wait(10)
    await unlinkWithPromise('./Live_Classes/Project_and_Machine_coding_round/hey.txt')
   }catch(e){
    console.log("Error", e)
   }
}

doTask().then(() => console.log("All Done"))

// ------------- Modern code -------------------

fsv2.readFile('./Live_Classes/Project_and_Machine_coding_round/hey.txt', 'utf-8')
    .then((content) => fsv2.writeFile('./Live_Classes/Project_and_Machine_coding_round/backup.txt' , content))
    .then(() => fsv2.unlink('./Live_Classes/Project_and_Machine_coding_round/hey.txt'))
    .catch((err) => console.log("Error" , err) )


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