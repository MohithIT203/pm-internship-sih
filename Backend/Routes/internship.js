const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const user=require('../Schemas/users.js');
const intern = require("../Schemas/internships.js");

router.get("/all-internship",async (req,res)=>{
    try{
        const internships = await intern.find({});
        res.status(200).send(internships);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.post("/internship",async (req,res)=>{
    try{
        const internships = await intern.find({});
        res.status(200).send(internships);
    }catch(err){
        return res.status(500).send(err);
    }
})
