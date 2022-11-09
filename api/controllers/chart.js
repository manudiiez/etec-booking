import Lab from '../models/Lab.js'
import Module from '../models/Module.js'
import Booking from '../models/Booking.js'
import User from '../models/User.js'

export const getLabsChart = async (req, res, next) => {
    try {
        const labs = await Lab.find()
        try {
            const list = await Promise.all(labs.map(async(lab) => {
                const newItem = {
                    label: lab.name,
                    data: await getStructuredData(lab),
                    backgroundColor: randomRGB()
                }
                return newItem
            }))

            res.status(200).json(list)

        } catch (error) {
            next(error)
        }
    } catch (error) {
        next(error)
    }
}
const getStructuredData = async (lab) => {
    try {
        const listModule = await Promise.all(lab.modules.map(module => {
            return Module.findById(module)
        }))

        const listLabEvents = []
        const currentDate = new Date().getMonth()
        let listData = [
            {
                id: currentDate-3,
                events: []
            },
            {
                id: currentDate-2,
                events: []
            },
            {
                id: currentDate-1,
                events: []
            },
            {
                id: currentDate,
                events: []
            },
        ]

        await Promise.all(listModule.map(async (module) => {

            const list = await Promise.all(module.unavailableDates.map(date => {
                return Booking.findById(date)
            }))

            list.map(date => {
                const month = date.date.getMonth()
                listData.map(data => {
                    if(data.id === month){
                        data.events.push(month)  
                    } 
                })
                listLabEvents.push(date.date.getMonth())
            })
            return list
        }))

        return(listData.map(item => item.events.length))
    } catch (error) {
        console.log(error)
    }
}

const randomRGB = () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    return RGBColor
}

export const getBookingChart = async(req, res, next) => {
    try {
        const countType1 = await Booking.find({subjectType:'informatica'}).count()
        const countType2 = await Booking.find({subjectType:'electronica'}).count()
        const countType3 = await Booking.find({subjectType:'otros'}).count()
        const arr = [
            {
                label: '# of Votes',
                data: [countType1, countType2, countType3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            }
        ]
        res.status(200).json(arr)
    } catch (error) {
        next(error)
    }
}


export const getLabCount = async(req, res, next) => {
    try {
        const labsCount = await Lab.count()
        const bookingCount = await Booking.count()
        const userCount = await User.count()
        const exportObj = [
            {
                title: 'Usuarios',
                count: await userCount
            },
            {
                title: 'Salas',
                count: await labsCount
            },
            {
                title: 'Reservas',
                count: await bookingCount
            },
        ]
        res.status(200).json(exportObj)

    } catch (error) {
        next(error)
    }
}