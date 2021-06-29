const mongoose=require('mongoose');
const questionSchema=new mongoose.Schema({
    desc:{
        type:String,
        required:true,
    },
    option:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true
    }
})
const Question=mongoose.model('Question',questionSchema);
module.exports=Question;
