import express from 'express'
import { getBookingChart, getLabCount, getLabsChart } from '../controllers/chart.js'

const router = express.Router()


router.get('/', getLabsChart)
router.get('/count', getLabCount)
router.get('/booking', getBookingChart)


export default router
