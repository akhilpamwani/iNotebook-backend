const mongoose=require('mongoose');
const Schema=mongoose.Schema();
const notes=Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        unique:true,
    },
    tags:{
        type:String,
        default:"General"
    },
    timespamns:{
        type:Date,
        default:Date.now,

    },
    
})

const NotesModel=mongoose.model("notes",notes);
module.exports=NotesModel