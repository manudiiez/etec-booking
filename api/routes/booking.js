import express from 'express'
import { createBooking, deleteBooking, getBooking, getModuleBookings, getModuleBookingsAvailability, updateBooking } from '../controllers/booking.js'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE
router.post('/:moduleid', createBooking)
// UPDATE
router.put('/:id/:subjectid/:labid/:userid', updateBooking)
// DELETE
router.delete('/:id/:moduleid/:userid', deleteBooking)
// GET
router.get('/:moduleid', getModuleBookings)
router.post('/availability/:moduleid', getModuleBookingsAvailability)




export default router  