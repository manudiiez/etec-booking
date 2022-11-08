import Lab from '../models/Lab.js'
import Module from '../models/Module.js'
import Booking from '../models/Booking.js'

export const getLabsChart = async (req, res, next) => {
    try {
        const labs = await Lab.find()
        try {
            const list = await Promise.all(labs.map(async(lab) => {
                const newItem = {
                    label: lab.name,
                    data: await getLabsChart2(lab),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
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
export const getLabsChart2 = async (lab) => {
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