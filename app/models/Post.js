import mongoose from "mongoose"

// mongodb schema using mongoose
const PostSchema = new mongoose.Schema({
    title:{type:String,require:true},
    author:{type:String},
    content:{type:String}
},{
    timestamps:true
})

// creating or exporting model 
module.exports = mongoose.models.Post || mongoose.model("Post",PostSchema)




