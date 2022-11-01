import Booking from '../models/Booking.js'
import Module from '../models/Module.js'


// CREATE 
export const createBooking = async (req, res, next) => {
    const newBooking = new Booking(req.body)
    const moduleId = req.params.moduleid

    try {
        const savedBooking = await newBooking.save()
        try {
            const moduleSaved = await Module.findByIdAndUpdate(moduleId, 
                {$push: { unavailableDates: savedBooking._id }},
                { new: true }
            )

            res.status(200).json({
                module: moduleSaved,
                booking: savedBooking
            })
        } catch (error) {
            next(error)
        }
    } catch (error) {
        next(error)
    }
}