import express from 'express'
import { createModule, deleteModule, getModule, getModuleBooking, updateModule, updateModuleAvailability } from '../controllers/module.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE
router.post('/:labid',verifyAdmin, createModule)
// UPDATE
router.put('/:id',verifyAdmin, updateModule)
router.put("/availability/:id", updateModuleAvailability);

// DELETE
router.delete('/:id/:labid',verifyAdmin, deleteModule)
// GET
router.get('/:id', getModule)
router.get('/booking/:moduleid/:dateid', getModuleBooking)

 
export default router