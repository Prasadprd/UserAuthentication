const mongoose = require('mongoose')
const validator = require('validator')

const userSchema= new mongoose.Schema({
    
    username :{
      type : String,
      required : true,
    },
    email :{
        type:String,
        required: true,
        unique:true,
        trim : true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    password:{
        type:String,
        required: true,
        trim: true,
        minlength : 7,
        validate(value){
            if(value.includes('password')){
                throw new Error('Invlid Password')
            }
        }
    }

})

const User = mongoose.model('User',userSchema)

module.exports = User