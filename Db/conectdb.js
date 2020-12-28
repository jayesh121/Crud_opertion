const mongoose = require('mongoose');
require('dotenv').config()
/*
     mongoose.connect(process.env.DATABASE, {
        useUnifiedTopology:true,
        useNewUrlParser: true,
        useCreateIndex: true,
        bufferMaxEntries : 0,
        bufferCommands: false
       
    }).then(()=> console.log("Db connected"))
    .catch(err => console.log("Db conn"))

   */
mongoose.Promise= global.Promise
mongoose.connect(process.env.MONGOURI)