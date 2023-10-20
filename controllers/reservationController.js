"use strict"

const Reservation = require("../models/reservationModel")
const Room = require("../models/roomModel")

module.exports = {

    list: async(req, res)=>{

        const data = await res.getModelList(Reservation)
        res.status(200).send({
            error:false,
            details:await res.getModelListDetails(Reservation),
            data
        })
    },
    create: async(req, res)=>{


        const {price} = await Room.findOne({_id:req.body.roomId
        }, {_id:false, price:true})
        req.body.price = price
        req.body.totalPrice = price * req.body.night
        const data = await Reservation.create(req.body)
        res.status(201).send({
            error:false,
            data
        })
    },
    read: async(req, res)=>{

        const data = await Reservation.findOne({_id:req.params.id
        })
        res.status(200).send({
            error:false,
            data
        })

    },
    update: async(req, res)=>{

        // const price = await Room.findOne({_id:req.params.roomId
        // }, {_id:false, price:true})
        // req.body.price = price.price
        // req.body.totalPrice = price * req.body.night
        // console.log(price);

        const data = await Reservation.updateOne({_id:req.params.id})
        res.status(202).send({
            error:false,
            data,
            newData: await Reservation.findOne({_id:req.params.id}, req.body)
        })

    },
    delete: async(req, res)=>{

        const data = await Reservation.deleteOne({_id:req.params.id})

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })


    },

}