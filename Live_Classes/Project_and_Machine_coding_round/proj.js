async function registerUser(){
    await collectData()
    validateUserEmail()

     await insertInDb()
    sendEmail()
    sendPushNotification()
}

registerUser()
    .then(() => console.log("Done"))
    .catch((err) => console.log("Error" , err))