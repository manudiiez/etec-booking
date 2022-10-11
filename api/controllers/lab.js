import Lab from '../models/Lab.js'


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