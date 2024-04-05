const mongoose = require("mongoose");

const ProudctSchema = new mongoose.Schema (
    {
        title :{type:String , required:true , unique:false} , 
        desc :{type:String , require:true },
        img: {type:String , require:true},
        categories: {type:Array },
        size: {type:String },
        color: {type:String},
        price:{type:Number},
    },
    {timestamps:true}
);
module.exports=mongoose.model("Proudct",ProudctSchema);