const User = require("../../models/Auth/auth.models");
const GenerateTokenAndSetCookie = require("../../utils/generateToken");

const Register = async(req,res)=>{
    try {
        let {username,email,password,role} = req.body;

        if(!username || !email || !password){
            res.stutas(400).json({message:"All Filed Required."})
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){
            return res.status(400).json({success:false,message:"Invalid Email"})
        }

        if(password.length < 6 ){
            return res.status(400).json({success:false,message:"Password must be at least 6 characters"})
        }

        let ExitsEmail = await User.findOne({email:email})
        if(ExitsEmail){
            return res.status(400).json({success:false,message:"Email already exists"})
        }

        let UserObj = new User({
            username,
            email,
            password,
            role
        })
        GenerateTokenAndSetCookie(UserObj._id,res)
        await UserObj.save()
        res.status(200).json({success:true,user:{
            ...UserObj._doc,
            password:""
        }})
    } catch (error) {
        console.log("Error In Register Controller :- ",error.message)
        res.status(500).json({message:'Internal Error in Register Controller :- ',error:error})
    }
}

const Login = async(req,res)=>{
    try {
       let data = await User.find()
       res.status(200).json({success:true,user:{
        data,
    }})
    } catch (error) {
        console.log("Error In Login Controller :- ",error.message)
        res.status(500).json({message:'Internal Error :- ',error:error})
    }
}

module.exports = {Register,Login}