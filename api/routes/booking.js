import express from 'express'
import { createBooking, deleteBooking, updateBooking } from '../controllers/booking.js'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE
router.post('/:moduleid', createBooking)
// UPDATE
router.put('/:id/:subjectid/:userid', verifyUser, updateBooking)
// DELETE
router.delete('/:id/:moduleid/:userid', verifyUser, deleteBooking)


export default router