const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const user = require("../Schemas/users.js");
const intern = require("../Schemas/internships.js");

router.get("/all-internship", async (req, res) => {
  try {
    const internships = await intern.find({});
    res.status(200).send(internships);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("/internship", async (req, res) => {
    
  try {
    if(!req.body){
        return res.status(404).send({message:"Fill all details"})
    }
    const saveInternship = new intern(req.body);
    await saveInternship.save();
    res.status(200).send({message:"Internship Created",saveInternship});
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;