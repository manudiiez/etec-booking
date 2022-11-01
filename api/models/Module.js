import mongoose from 'mongoose';

const moduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startHour: {
        type: Number,
        required: true
    },
    endHour: {
        type: Number,
        required: true
    },
    startTime: {
        type: Number,
        required: true
    },
    endTime: {
        type: Number,
        required: true
    },
    unavailableDates: {
        type: [String]
    }
});

export default mongoose.model('Module', moduleSchema)  