import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import usermodel from "../model/model.js";

export const signin = async(req,res)=>{
    
    const{email,password}=req.body;
    try {
        const old=await usermodel.findOne({email});

        if(!old) return res.status(404).send("User doesnt exist");

        const pass=await bcrypt.compare(password,old.password);

        if(!pass) return res.status(404).send("Invalid credentails");

        const token=jwt.sign({email:old.email,id:old._id},'intern',{expiresIn:"1h"});

        res.status(200).json({result:old,token});

    } catch (error) {

        res.status(500).send("Something went wrong")
    }
};



export const signup =async(req,res)=>{
    
    const{email,password,name,mobile,address,username}=req.body;
    
    try {
        const old=await usermodel.findOne({email});

        if(old) return res.status(404).send("User already exist");

        const hashing=await bcrypt.hash(password,12);

        const result=await usermodel.create({email,password:hashing,name,username,mobile,address});

        const token=jwt.sign({email:result.email,id:result._id},'intern',{expiresIn:"1h"});

        res.status(201).json({ result, token });

    } catch (error) {
        
        res.status(500).send(  "Something went wrong" );
    
        console.log(error);
    }
};

// export const getdetails=async(req,res)=>{
    
//     console.log(req.params);

//     const { email } = req.params;

//     try {
//         const usercontent = await usermodel.findOne({email:email});
//         res.status(201).json(usercontent);
        
//     } catch (error) {
//         console.log(error);
//         res.status(404);
//     }
// };