import express from 'express'
import { createSubject, deleteSubject, getAllSubjects, getSubject, updateSubject } from '../controllers/subject.js'
/* ----------------------------- ERROR FUNCTION ----------------------------- */
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE
router.post('/:userid', verifyAdmin, createSubject)

// UPDATE
router.put('/:id/:userid', verifyAdmin, updateSubject)
// DELETE
router.delete('/:id/:userid', verifyAdmin, deleteSubject)
// GET
router.get('/:id/:userid', verifyAdmin, getSubject)
// GET ALL
router.get('/', getAllSubjects)

export default router 