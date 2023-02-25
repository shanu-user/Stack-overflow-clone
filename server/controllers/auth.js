import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'

export const signup=async (req,res)=>{
    const {name, email, password}= req.body;
    try{
        const existinguser=await users.findOne({email})
        if(existinguser){
            return res.send(404).json({message: "User already Exist."})
        }
        const hashedPassword=await bcrypt.hash(password,12)
        const newUser=await users.create({name,email,password: hashedPassword})
        // const token=jwt.sign({email: newUser.email, id: newUser._id},"test",{expriresIn: '1h'})
        const token=jwt.sign({email: newUser.email, id: newUser._id}, process.env.JWT_SECRET, {expriresIn: '1h'})
        res.status(200).json({result: newUser, token})
    }catch(err){
        res.status(500).json("Something went wrong...")
    }    
}
export const login=async (req,res)=>{
    const {email,password}=req.body;
    try{
        const existinguser=await users.findOne({email})
        if(!existinguser){
            return res.send(404).json({message: "User don't Exist."})
        }
        const isPasswordCrt=await bcrypt.compare(password,existinguser.password)
        if(!isPasswordCrt){
            return res.send(404).json({message: "Invalid Credentials"})
        }
        // const token=jwt.sign({email: existinguser.email, id: existinguser._id},"test",{expriresIn: '1h'})
        const token=jwt.sign({email: existinguser.email, id: existinguser._id}, process.env.JWT_SECRET, {expriresIn: '1h'})
        res.status(200).json({result: existinguser, token})
    }
    catch(err){
        res.status(500).json("Something went wrong...")
    }
}