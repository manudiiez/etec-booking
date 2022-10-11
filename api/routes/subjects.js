import express from 'express'
import { createSubject, deleteSubject, getAllSubjects, getSubject, updateSubject } from '../controllers/subject.js'
/* ----------------------------- ERROR FUNCTION ----------------------------- */
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE
router.post('/:userid', verifyUser, createSubject)

// UPDATE
router.put('/:id/:userid', verifyUser, updateSubject)
// DELETE
router.delete('/:id/:userid', verifyUser, deleteSubject)
// GET
router.get('/:id/:userid', verifyUser, getSubject)
// GET ALL
router.get('/', getAllSubjects)

export default router