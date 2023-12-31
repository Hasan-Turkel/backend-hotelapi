"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/room:

const reservation = require('../controllers/reservationController')

// URL: /rooms

router.route('/')
    .get(reservation.list)
    .post(reservation.create)

router.route('/:id')
    .get(reservation.read)
    .put(reservation.update)
    .patch(reservation.update)
    .delete(reservation.delete)

/* ------------------------------------------------------- */
module.exports = router