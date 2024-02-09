const express =require('express')
const mongoose=require('mongoose')
const cors =require('cors');
const dotenv =require('dotenv')
const app=express()
dotenv.config()
const route=require("./route/routes")
//const nodemailer =require('nodemailer')
const bodyParser = require('body-parser');

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
}, mongoose.set('strictQuery', false))
    .then(() => console.log("mongoose is connected"))
    .catch(err => console.log(err))

    app.use('/',route)



    const PORT=process.env.PORT ||8080

    app.listen(PORT,()=>{
        console.log(`server running 8081`)
    })