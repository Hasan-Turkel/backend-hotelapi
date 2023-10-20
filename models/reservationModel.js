"use strict"


const mongoose = require("mongoose")

const ReservationSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true,
       
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required: true,
    },
    guestNumber: {
        type: Number,
        required: true,
        },
    night: {
        type: Number,
        required: true,
        default:1
    },

    price: {
        type: Number,
        required:true,
        default:200
        
    },
    totalPrice: {
        type: Number,
        
    },
}, {collection:"reservations", timestamps:true})

module.exports = mongoose.model("Reservation", ReservationSchema)