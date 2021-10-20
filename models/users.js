const mongoose = require('mongoose');
const validator = require('validator');

const dataSchema = new mongoose.Schema({

    name:String,
    email:{
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("enter a valid email");
            }
        },
        required:true,
        unique:true,
        type:String
    },
    password :{
        required:true,
        unique:true,
        type:String
    },
    confirmpass:{ 
        required:false,   
        type:String
    },
    userName:{
        required:true,
        unique:true,
        type:String
    },
    phone:{
        required:true,
        unique:true,
        type:Number
    }


})

const UserData = new mongoose.model('UserData' ,dataSchema);

module.exports = UserData;