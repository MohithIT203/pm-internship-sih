const mongoose = require("mongoose");

const locationSchema = mongoose.model({
    village:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    zip_code:{
        type:String,
        required:true
    },
})

const qualificatinSchema = mongoose.model({
    qualification:{type:String},
    course:{type:String},
    specialization:{type:String},
    skills:{
        type:Array,
        default:[]
    },
    certificates:{
        type:Array,
        default:[]
    },
    specialization:{type:String},
})
const internship = mongoose.model({
    title:{
        type:String,
        required:true
    },
    sector:{
        type:String,
        required:true
    },
    location:locationSchema,
    qualification:qualificatinSchema,
    field:{
        type:String,
        required:true
    },
    total_applied:{
        type:Number,
    },
    
    field:{
        type:String,
        required:true
    },
    
})

module.exports = mongoose.model("internship", internship);
