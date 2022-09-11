const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    Img: {
        type: String
    }
})

const Adminmodel = mongoose.model("uploadphoto", AdminSchema)
module.exports = Adminmodel
