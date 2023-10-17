"use strict"


const mongoose = require("mongoose")


const RoomSchema = new mongoose.Schema({

    roomNumber: {
        type: Number,
        trim: true,
        required: true,
        unique:true
    },
    price: {
        type: Number,
        required: true,
        default:100
        
    }
   
}, {collection:"rooms", timestamps:true})

module.exports = mongoose.model("Rooms", RoomSchema)