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
        trim: true,
        required: true,
        
    }
   
}, {collection:"rooms", timestamps:true})

module.exports = mongoose.model("Rooms", RoomSchema)