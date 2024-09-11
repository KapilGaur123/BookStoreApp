import User from "../models/userModel.js"; 
import bcrypt from "bcrypt"

export const signup = async (req, res) => {
    try {
        let {fullname, email, password} = req.body;

        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({message: "user exist already"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        const createdUser = new User({
            fullname,
            email,
            password : hashPassword
        })

        await createdUser.save();
        res.status(200).json({message: "user create successfully", user:{
            id: user._id,
            fullname: user.fullname,
            email: user.email
        }});
    } catch (error) {
        console.log("error : "+ error.message);      
        res.status(500).json({message: "internal server error"});       
    }
}

export const login = async (req, res) => {
    try {
        let {email, password} = req.body;
        const user = await User.findOne({email})
        const isMatch = await bcrypt.compare(password, user.password)

        if(!user || !isMatch){
        res.status(404).json({message: "user or password is not valid"});       
        }
        else{
        res.status(200).json({message: "user login successfully", user:{
            fullname: user.fullname,
            email: user.email
        }});
        }
    } catch (error) {
        console.log("error : "+ error.message);      
        res.status(500).json({message: "internal server error"});
    }
}