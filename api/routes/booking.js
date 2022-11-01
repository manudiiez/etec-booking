import express from 'express'
import { createBooking } from '../controllers/booking.js'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE
router.post('/:moduleid', createBooking)
// UPDATE
// router.put('/:id/:userid', verifyUser, updateLab)
// DELETE
// router.delete('/:id/:userid', verifyUser, deleteLab)


export default router