import Module from '../models/Module.js'
import Lab from '../models/Lab.js'
 

// CREATE
export const createModule = async (req, res, next) => {
    const newModule = new Module(req.body)
    try {
        const savedModule = await newModule.save()
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
    try {
        await Module.findByIdAndDelete(req.params.id)
        res.status(200).json('Module has been deleted')
    } catch (error) {
        next(error)
    }
}
// GET
export const getModule = async (req, res, next) => {
    try {
        const Module = await Module.findById(req.params.id)
        res.status(200).json(Module)
    } catch (error) {
        next(error)
    }
}
// GET ALL
export const getAllModules = async (req, res, next) => {
    try {
        const Modules = await Module.find()
        res.status(200).json(Modules)
    } catch (error) {
        next(error)
    }
}

export const updateModuleAvailability = async (req, res, next) => {
    try {

        const reserve = await Module.findOne({username: req.body.username})


        const updated = await Module.findByIdAndUpdate(
            req.params.id,
            {$push: {unavailableDates: req.body} },
            { new: true }
        );
        // await Module.updateOne(
        //     { "unavailableDates._id": req.params.id },
        //     {
        //         $push: {
        //             "roomNumbers.$.unavailableDates": req.body.dates
        //         },
        //     }
        // );
        res.status(200).json(updated);
    } catch (err) {
        next(err);
    }
};