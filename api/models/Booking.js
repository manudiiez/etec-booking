import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: true
    },
    subjectType: {
        type: String,
        required: true
    },
    subjectAge: {
        type: Number,
        required: true
    },
    teacherName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
});

export default mongoose.model('Booking', bookingSchema)