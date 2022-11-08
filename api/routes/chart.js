import express from 'express'
import { getLabsChart } from '../controllers/chart.js'

const router = express.Router()


router.get('/', getLabsChart)


export default router
