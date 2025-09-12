const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  Name: { type: String },
  
  
});

module.exports = mongoose.model("Profile", profileSchema);
