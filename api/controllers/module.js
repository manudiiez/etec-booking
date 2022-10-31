import Module from '../models/Module.js'
import Lab from '../models/Lab.js'
 

// CREATE
export const createModule = async (req, res, next) => {
    const newModule = new Module(req.body)
    const labId = req.params.labid

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
export const updateModule = async (req, res, next) => {
    try {
        const updatedModule = await Module.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        res.status(200).json(updatedModule)
    } catch (error) {
        next(error)
    }
}
// DELETE
export const deleteModule = async (req, res, next) => {
    const labId = req.params.labid
    try {
        await Module.findByIdAndDelete(req.params.id)
        try {
            await Lab.findByIdAndUpdate(labId, {
                $pull: { modules: req.params.id }
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json('Module has been deleted')
    } catch (error) {
        next(error)
    }
}
// GET
export const getModule = async (req, res, next) => {
    try {
        const module = await Module.findById(req.params.id)
        res.status(200).json(module)
    } catch (error) {
        next(error)
    }
}
// GET BOOKING
export const getModuleBooking = async (req, res, next) => {

    const moduleId = req.params.moduleid
    const dateId = req.params.dateid

    console.log(moduleId, dateId)

    try {
        const module = await Module.findById(moduleId)
        const date = module.unavailableDates.filter(item => dateId === item._id)
        res.status(200).json(module)

        
    } catch (error) {
        
    }

    // try {
    //     const module = await Module.findByIdAndUpdate(
    //         {"_id" : moduleId, "unavailableDates._id" : dateId},
    //         {$set : req.body},
    //         { new: true }
    //     )
    //     res.status(200).json(module)
    // } catch (error) {
    //     next(error)
    // }
    
    // try {
    //     const module = await Module.findById(moduleId)
    //     res.status(200).json(module)
    // } catch (error) {
    //     next(error)
    // }
}


export const updateModuleAvailability = async (req, res, next) => {

    try {
        const updated = await Module.findByIdAndUpdate(
            req.params.id,
            {$push: {unavailableDates: req.body} },
            { new: true }
        );
        res.status(200).json('modulo reservado');
    } catch (err) {
        next(err);
    }
};