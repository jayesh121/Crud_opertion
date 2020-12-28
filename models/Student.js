const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StudentScheama= new Schema({
    name:{
        type:String,
       // required:true    
    },
    email:{
        type:String,
        //required:true,
        //unique:true
    },
    password:{
        type:String,
        //required:true
    },
    PhoneNumber:{
        type:String,
      //  required:true,
      //  minlength:10,
      //  unique:true
          
    },
   // stud:{
   //     type: Schema.Types.ObjectId,
  //      ref:'Post'
 //},
 student:[{
    type: Schema.Types.ObjectId,
    ref:'Post'
}]
    


})
module.exports = mongoose.model('Student', StudentScheama);