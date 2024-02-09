const express=require("express")
const router=express.Router()
const { singUp, logIn, dumycontroller, emailsend, updatepassword }=require("../controller/acountController")


router.post("/signup",singUp)
router.post("/login",logIn)
router.post("/sendemail",emailsend)
router.put("/updatepassword",updatepassword)



module.exports=router;
