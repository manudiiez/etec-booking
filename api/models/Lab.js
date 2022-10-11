import mongoose from 'mongoose';

const labSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    modules: {
        type: [String]
    }
});

export default mongoose.model('Lab', labSchema)