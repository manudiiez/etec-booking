import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js'
/* ----------------------------- ERROR FUNCTION ----------------------------- */
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// UPDATE
router.put('/:userid',verifyUser, updateUser)

// DELETE
router.delete('/:userid',verifyUser, deleteUser)

// GET
router.get('/:userid',verifyUser, getUser)

// GET ALL
router.get('/', verifyAdmin, getAllUser)

export default router