import Booking from '../models/Booking.js'
import Module from '../models/Module.js'
import Subject from '../models/Subject.js'
import Lab from '../models/Lab.js'

// CREATE 
export const createBooking = async (req, res, next) => {
    const newBooking = new Booking(req.body)
    const moduleId = req.params.moduleid

    try {
        const module = await Module.findById(moduleId)

        const list = await Promise.all(module.unavailableDates.map(date => {
            return Booking.findById(date)
        }))

        

        const date = new Date(newBooking.date).getTime()
        const item = list.filter(book => new Date(book.date).getTime() === date)

        if(item.length === 0){
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
        }else{
            res.status(200).json({
                message: 'ya existe el boking'
            }) 
        }

    } catch (error) {
        next(error)
    }
}


const updateBookingAprove = async (subject, booking, userId) => {
    try {
        await Booking.findByIdAndUpdate(
            booking._id,
            { $set: {
                subjectName: subject.name,
                subjectType: subject.type,
                subjectAge: subject.age,
                teacherName: subject.teacher,
                teacherId: userId,
            } },
            { new: true }
        )
    
        return 'Su reserva fue realizada con exito'

    } catch (error) {
        console.log(error)
    }

}

export const updateBooking = async (req, res, next) => {

    const subjectId = req.params.subjectid
    const bookingId = req.params.id
    const labId = req.params.labid
    const userId = req.params.userid

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
                    message: "La reserva fue rechaza por el año",
                    booking: booking,
                    subject: subject,
                    lab: lab
                })
            } else if (byNum1 > byNum2) {
                res.status(200).json({
                    message: updateBookingAprove(subject, booking),
                    booking: booking,
                    subject: subject,
                    lab: lab
                })
            }
        } else if (byType1 && !byType2) {
            res.status(200).json({
                message: "La reserva fue rechaza por su categoria",
                booking: booking,
                subject: subject,
                lab: lab
            })
        } else if (!byType1 && byType2) {
            res.status(200).json({
                message: updateBookingAprove(subject, booking),
                booking: booking,
                subject: subject,
                lab: lab
            })
        }

    } catch (error) {
        next(error)
    }
}
 
export const deleteBooking = async (req, res, next) => {
    const moduleId = req.params.moduleid
    const userId = req.params.userid
    try {
        
        const booking = await Booking.findById(req.params.id)
        if(booking.teacherId === userId){


            await Booking.findByIdAndDelete(req.params.id)

            try {
                await Module.findByIdAndUpdate(moduleId, {
                    $pull: { unavailableDates: req.params.id }
                })

                res.status(200).json({
                    message: 'reserva eliminada'
                })
            } catch (error) {
                next(error)
            }

        }else{
            res.status(200).json({
                message: 'reserva no eliminada'
            })
        }
    } catch (error) {
        next(error)
    }
}

export const getBooking = async (req, res, next) => {
    try {
        const book = await Booking.findById(req.params.id)
        res.status(200).json(book)
    } catch (error) {
        next(error)
    }
}


export const getModuleBookings = async (req, res, next) => {
    const moduleId = req.params.moduleid
    try {
        const module = await Module.findById(moduleId)
        const listBooking = await Promise.all(module.unavailableDates.map(booking => {
            return Booking.findById(booking)
        }))

        res.status(200).json(listBooking)
    } catch (error) {
        next(error)
    } 
}
export const getModuleBookingsAvailability = async (req, res, next) => {
    const moduleId = req.params.moduleid
    const allDates = req.body.dates
    try {
        const module = await Module.findById(moduleId)
        const listBooking = await Promise.all(module.unavailableDates.map(booking => {
            return Booking.findById(booking)
        }))

        const listDate = []

        allDates.map(date => {
            listBooking.map(book => {
                const dateSearch = new Date(date * 1000).getTime()
                const dateBooking = new Date(book.date * 1000).getTime()
                if (dateSearch === dateBooking) {
                    listDate.push(dateBooking)
                }
            })
            
        })
        
        res.status(200).json(listDate.length !== 0 ? true : false)

    } catch (error) {
        next(error)
    }
}