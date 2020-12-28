const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userScheama= new Schema({
    name:{
        type:String,
        required:true    
    },
    email:{
        type:String,
        required:true,
       // unique:true
    },
    password:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true,
       /// minlength:10,
       // unique:true
          
    },
   // student:[{
  //      type: Schema.Types.ObjectId,
 //       ref:'Student'
// }],

 //Employ:[{
 //    type: Schema.Types.ObjectId,
 //    ref:'Employ'
//}],

 stud:{
     type: Schema.Types.ObjectId,
      ref:'Student'
},
Empl:{
    type: Schema.Types.ObjectId,
    ref:'Employ'
}

});
module.exports = mongoose.model('Post', userScheama);