import Subject from '../models/Subject.js'
import User from '../models/User.js'


// CREATE
export const createSubject = async (req, res, next) => {
    const newSubject = new Subject(req.body)
    const userId = req.params.userid

    try {
        const savedSubject = await newSubject.save()
        try {
            await User.findByIdAndUpdate(userId, {
                $push: { subjects: savedSubject._id }
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedSubject)
    } catch (error) {
        next(error)
    }
}
// UPDATE
export const updateSubject = async (req, res, next) => {
    try {
        const updatedSubject = await Subject.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        res.status(200).json(updatedSubject)
    } catch (error) {
        next(error)
    }
}
// DELETE
export const deleteSubject = async (req, res, next) => {

    const userId = req.params.userid

    try {
        await Subject.findByIdAndDelete(req.params.id)
        try {
            await User.findByIdAndUpdate(userId, {
                $pull: { subjects: req.params.id }
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json('Subject has been deleted')
    } catch (error) {
        next(error)
    }
}
// GET
export const getSubject = async (req, res, next) => {
    try {
        const subject = await Subject.findById(req.params.id)
        res.status(200).json(subject)
    } catch (error) {
        next(error)
    }
}
// GET ALL
export const getAllSubjects = async (req, res, next) => {
    try {
        const Subjects = await Subject.find()
        res.status(200).json(Subjects)
    } catch (error) {
        next(error)
    }
}
export const getAllSubjectsTeacher = async (req, res, next) => {

    const userId = req.params.userid

    try {
        const user = await User.findById(userId)
        const list = await Promise.all(user.subjects.map(subject => {
            return Subject.findById(subject)
        }))
        res.status(200).json(list)

    } catch (error) {
        next(error)
    }
}