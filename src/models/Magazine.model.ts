import mongoose from "mongoose";

const { Schema } = mongoose;

const MagazineSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    edition: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    fileLocation: {
        type: String,
        required: true,
    },
    issn: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Magazine =
    mongoose.models.Magazine || mongoose.model("Magazine", MagazineSchema);
export default Magazine;
