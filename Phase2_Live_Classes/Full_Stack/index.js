import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import db from './utils/db.js';
import userRoutes from './routes/user.routes.js' 

dotenv.config()

const app = express()  // webserver

app.use(cors({
    origin: process.env.BASE_URL,
    methods: [ "GET", "POST", "DELETE", "OPTIONS"] , // these are not case sensitive
    allowedHeaders: ['Content-Type' , 'Authorization']  // case sensitive
}))

// for accept json data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Cohort!')
})   // this will work when request gone

app.get('/peer', (req , res) => {
    res.send("Peer!!")
})

// connect to db
db()


// user routes
app.use('/api/v1/users/', userRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})