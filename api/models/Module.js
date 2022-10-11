import mongoose from 'mongoose';

const moduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    unavailableDates: [{
        idSubject: String, 
        date: Date
    }]
});

export default mongoose.model('Module', moduleSchema) 