import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    teacher: {
        type: String,
        required: true
    }
});

export default mongoose.model('Subject', subjectSchema)  