const mongoose = require("mongoose")

const sessionSchema = mongoose.Schema({
    session:{}
})


const sessionModel = mongoose.model("session",sessionSchema)


module.exports = sessionModel;