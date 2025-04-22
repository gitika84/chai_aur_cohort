import User from '../model/User.model.js'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'



dotenv.config()

const registerUser = async (req , res ) => {
    const {name , email , password} = req.body;
    if(!name || !email || !password){
       return res.status(400).json({
            message : "All field are required",
       });
    }
    

    
    try {
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                message : "User already exixts",
            })
        }

       
        const user =  await User.create({
            name,
            email,
            password,
         })


        if(!user){
            return res.status(400).json({
                message : "User not registered"
            })
        }

        const token = crypto.randomBytes(32).toString("hex")
        

        user.verficationToken = token
        await  user.save()
        

        const transport = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT, 
            auth: {
              user: process.env.MAILTRAP_USERNAME,
              pass: process.env.MAILTRAP_PASSWORD
            }
          });

          const mailOptions = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: "Verfiy you email",
            text:  `Please click on the following link ${
            process.env.BASE_URL}/api/v1/users/verify/${token}`,
            html: "<p>HTML version of the message</p>",
          };
          
          await transport.sendMail(mailOptions)


          res.status(200).json({
            message : "User registered successfully",
            success : true,
          })
         


    } catch (error) {
        res.status(400).json({
            message : "User not registered",
            error,
            success : false
        })
    }
}

const verifyUser = async(req , res) => {
    const { token } = req.params
    console.log(token)

    if(!token){
        return res.status(400).json({
             message : "Invaild token",
        });
     }

    const user = await User.findOne({ verficationToken : token })
    
    if(!user){
        return res.status(400).json({
             message : "Invaild token",
        });
    }

    user.isVerified = true
    user.verficationToken = undefined

    await user.save()

}

const login = async(req , res){

}

export { registerUser , verifyUser , login }