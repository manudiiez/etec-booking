import Booking from '../models/Booking.js'
import Module from '../models/Module.js'
import Subject from '../models/Subject.js'
import Lab from '../models/Lab.js'

// CREATE 
export const createBooking = async (req, res, next) => {
    const newBooking = new Booking(req.body)
    const moduleId = req.params.moduleid

    try {
        const savedBooking = await newBooking.save()
        try {
            const moduleSaved = await Module.findByIdAndUpdate(moduleId,
                { $push: { unavailableDates: savedBooking._id } },
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

const updateBookingAprove = async (subject, booking) => {
    await Booking.findByIdAndUpdate(
        booking._id,
        { $set: {
            subjectName: subject.name,
            subjectType: subject.type,
            subjectAge: subject.age,
            teacherName: subject.teacher
        } },
        { new: true }
    )

    res.status(200).json({
        message: 'Su reserva fue realizada con exito'
    })

}

export const updateBooking = async (req, res, next) => {

    const subjectId = req.params.subjectid
    const bookingId = req.params.id
    const labId = req.params.labid

    try {

        const subject = await Subject.findById(subjectId)
        const booking = await Booking.findById(bookingId)
        const lab = await Lab.findById(labId)

        const byType1 = lab.type === booking.subjectType;
        const byType2 = lab.type === subject.type;

        if (byType1 == byType2) {
            const byNum1 = 6 - booking.subjectAge;
            const byNum2 = 6 - subject.age;
            if (byNum1 <= byNum2) {
                res.status(200).json({
                    message: "La reserva fue rechaza debido a que esta materia tiene prioridad en este laboratorio"
                })
            } else if (byNum1 > byNum2) {
                updateBookingAprove(subject, booking)
            }
        } else if (byType1 && !byType2) {
            console.log('se queda la reserva');
        } else if (!byType1 && byType2) {
            console.log('cambia la reserva');
        }

        res.status(200).json({
            subject: subject,
            booking: booking
        })




        // const updatedBooking = await Booking.findByIdAndUpdate(
        //     req.params.id,
        //     { $set: req.body },
        //     { new: true }
        // )

        // res.status(200).json(updatedBooking)
    } catch (error) {
        next(error)
    }
}

export const deleteBooking = async (req, res, next) => {
    const moduleId = req.params.moduleid
    try {
        await Booking.findByIdAndDelete(req.params.id)
        try {
            await Module.findByIdAndUpdate(moduleId, {
                $pull: { unavailableDates: req.params.id }
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json('Booking has been deleted')
    } catch (error) {
        next(error)
    }
}