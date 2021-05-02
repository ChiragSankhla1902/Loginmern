import mongoose from "mongoose";
import validator from "validator";

const userauth = mongoose.Schema({
    email:{type:String,
        unique: true,
        require:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Email not valid");
            }
        } 
    },
    password:{type:String,
        minlength:8,
        validator(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Not strong password");
            }
        }
    },
    username:{type:String,unique:true},
    name:{type:String},
    address:{type:String},
    mobile:{type:Number,
        unique:true,
        validator(value){
            if(!validator.isMobilePhone(value)){
                throw new Error("invalid Mobile number");
            }
        }
    },

});


const usermodel=mongoose.model("userinfo",userauth);

export default usermodel;