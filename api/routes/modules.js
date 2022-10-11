import express from 'express'
import { createModule, deleteModule, getAllModules, getModule, updateModule, updateModuleAvailability } from '../controllers/module.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE
router.post('/', createModule)
// UPDATE
router.put('/:id', updateModule)
router.put("/availability/:id", updateModuleAvailability);

// DELETE
router.delete('/:id', deleteModule)
// GET
router.get('/:id', getModule)
// GET ALL
router.get('/', getAllModules)

 
export default router