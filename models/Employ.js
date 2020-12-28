const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userScheama= new Schema({
    name:{
        type:String,
      //  required:true    
    },
    email:{
        type:String,
      //  required:true,
       // unique:true
    },
    password:{
        type:String,
       // required:true
    },
    PhoneNumber:{
        type:String,
       // required:true,
        //minlength:10,
       // unique:true
          
    },
    Empl:{
        type: Schema.Types.ObjectId,
        ref:'Post'
 },
 Employ:[{
     type: Schema.Types.ObjectId,
    ref:'Post'
}],

    

});
module.exports = mongoose.model('Employ', userScheama);