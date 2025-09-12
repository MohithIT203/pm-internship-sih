const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const PORT = process.env.PORT||5000;
const register = require('../Routes/register');
const app = express();

app.use(express.json());
app.use(cors({origin:"*",credential:true}));


mongoose.connect("mongodb+srv://mohith:100406@cluster-1.suxc7ye.mongodb.net/pm-internship-sih")
.then(()=>{
    console.log("Connected to Database")
})
.catch((err)=>{
    console.log("Error Connecting with Database");
})
app.use(register);

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
})