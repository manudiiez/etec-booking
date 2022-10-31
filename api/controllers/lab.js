import Lab from '../models/Lab.js'
import Module from '../models/Module.js'


// CREATE 
export const createLab = async (req, res, next) => {
    const newLab = new Lab(req.body)
    try {
        const savedLab = await newLab.save()
        res.status(200).json(savedLab)
    } catch (error) {
        next(error)
    }
}

const createModule = async (body, id) => {
    const newModule = new Module(body)
    const labId = id

    try {
        const savedModule = await newModule.save()
        try {
            await Lab.findByIdAndUpdate(labId, {
                $push: { modules: savedModule._id }
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedModule)
    } catch (error) {
        next(error)
    }
}
// UPDATE
export const updateLab = async (req, res, next) => {
    try {
        const updatedLab = await Lab.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        res.status(200).json(updatedLab)
    } catch (error) {
        next(error)
    }
}
// DELETE
export const deleteLab = async (req, res, next) => {
    try {
        await Lab.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel has been deleted')
    } catch (error) {
        next(error)
    }
}
// GET
export const getLab = async (req, res, next) => {
    try {
        const lab = await Lab.findById(req.params.id)
        res.status(200).json(lab)
    } catch (error) {
        next(error)
    }
}
// GET ALL
export const getAllLabs = async (req, res, next) => {
    try {
        const labs = await Lab.find()
        res.status(200).json(labs)
    } catch (error) {
        next(error)
    }
}

// GET ALL MODULES
export const getLabModules = async (req, res, next) => {
    const labId = req.params.labid
    try {
        const lab = await Lab.findById(labId)
        const list = await Promise.all(lab.modules.map(module => {
            return Module.findById(module)
        }))
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}


export const getLabEvents = async (req, res, next) => {
    const labId = req.params.labid
    try {
        const lab = await Lab.findById(labId)
        const list = await Promise.all(lab.modules.map(module => {
            return Module.findById(module)
        }))

        const list2 = []

        list.map(module => {
            module.unavailableDates.map( item => {
                let endDate = new Date(item.date)
                let date = {
                    subjectName: item.subjectName,
                    subjectType: item.subjectType,
                    subjectAge: item.subjectAge,
                    teacherName: item.teacherName,
                    date: item.date,
                    endDate: endDate,
                    _id: item._id
                }
                date.endDate.setHours(module.endHour , module.endTime)
                date.date.setHours(module.startHour , module.startTime)
                list2.push(date)
            } )
        })

        // list.map(module => {
        //     list2.push(...module.unavailableDates)
        // })
        res.status(200).json(list2)
    } catch (error) {
        next(error)
    }
}