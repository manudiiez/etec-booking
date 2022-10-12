import express from 'express'
import { createLab, deleteLab, getAllLabs, getLab, getLabModules, updateLab } from '../controllers/lab.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE
router.post('/', verifyAdmin, createLab)
// UPDATE
router.put('/:id', verifyAdmin, updateLab)
// DELETE
router.delete('/:id', verifyAdmin, deleteLab)
// GET
router.get('/:id', getLab)
// GET ALL
router.get('/', getAllLabs)
router.get('/module/:labid', getLabModules)


export default router
