const mongoose = require(`mongoose`)

const songsSchema = new mongoose.Schema({
  url:{
    type: String,
    required: true
  },
  posterUrl:{
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true  
},

  mood:{
    type: String,
    enum:{
      values:["happy","sad","surprised","calm"],
      message:"Enum this is"
    }
  }
})

const songsModel = mongoose.model("songs",songsSchema)

module.exports = songsModel

