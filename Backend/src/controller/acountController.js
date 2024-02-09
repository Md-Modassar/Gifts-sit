const acountModel=require("../model/acountModel")
const jwt =require("jsonwebtoken")
const dotenv =require("dotenv")
const nodemailer =require('nodemailer')
dotenv.config()


const isValidEmail = function (value) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    if (emailRegex.test(value)) return true;
  };
exports.singUp=async function(req,res){
  //  return res.send("hi")
   try{
    const data=req.body
      const {username,email,password}=data
      if(!username)
        {
          return res.status(400).send({statu:false,message:"please enter required field"})  
        }
     if(!email)
        {
          return res.status(400).send({statu:false,message:"please enter required field"})  
        } 
     if(!password){
        return res.status(400).send({statu:false,message:"please enter required field"})  
      } 

      if(!isValidEmail(email)){
        return res.status(400).send({ status: false, msg: "email is not valid" })
      }

      const emailexist=await acountModel.findOne({email:email})
      if (emailexist) return res.status(400).send({ status: false, msg: "email should be unique" })

      const createdata=await acountModel.create(data)
       return res.status(201).send({statsu:true,createdata})
   }catch(err){
    return res.status(500).send({status:false,message:err.message})
   }
}

exports.logIn=async(req,res)=>{
    try{
       let data=req.body
       let { email, password } = data

       if (!email) return res.status(400).send({ status: false, msg: "email is mendatory" })
       if (!password) return res.status(400).send({ status: false, msg: "password is mendatory" })

       if(!isValidEmail(email)){
        return res.status(400).send({ status: false, msg: "email is not valid" })
      }

       const emailexist =await acountModel.findOne({email:email})
       if(!emailexist){
        return res.status(400).send({status:false,message:"Plase enter valid email"})
       }
       
       if(password!=emailexist.password){
        return res.status(400).send({status:false,message:"Pease enter valid password"})
       }

       let token =jwt.sign({userId:emailexist._id},process.env.SE_JWT)
       return res.status(201).send({status:true,token,emailexist})

    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:"mdmodassar622@gmail.com",
    pass:"hfjl spjm kiys lcxa",
  },
});

exports.emailsend=async(req,res)=>{
   try{
    const { to, subject, message } = req.body;
      
    const mailOptions = {
      from: 'mdmodassar622@gmail.com',
      to,
      subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
   }catch(err){
    return res.status(500).send({status:false,message:err.message})
   }

}

exports.updatepassword=async(req,res)=>{
  try{
    let data=req.body
    const {email,newpassword}=data
    if (!email) return res.status(400).send({ status: false, msg: "email is mendatory" })
    if (!newpassword) return res.status(400).send({ status: false, msg: "password is mendatory" })


    if(!isValidEmail(email)){
      return res.status(400).send({ status: false, msg: "email is not valid" })
    }

    const updatedata =await acountModel.findOneAndUpdate({email:email},{$set:{password:newpassword}},{new:true})
    if(!updatedata){
     return res.status(400).send({status:false,message:"Plase enter valid email"})
    }
    return res.status(200).send({status:true,message:"updatepassword sccessfully",updatedata})  
  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
 
}