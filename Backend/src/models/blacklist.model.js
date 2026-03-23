const mongoose = require("mongoose")

const blacklistSchema = new mongoose.Schema({
  token:{
    type:String,
    required:[true,"token is req for blacklisting"],
    unique:[true,"token must be unique in blacklist"]

  }
},
{
  timestamps:true
}
)

 const blacklistModel = mongoose.model("Blacklist ",blacklistSchema)

 module.exports = blacklistModel