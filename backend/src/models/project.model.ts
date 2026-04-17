import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
    title: string;
    description: string;
    tech: string[];
    live: string;
    github: string;
    image?: string;
    position?: number; // ✅ NEW
}

const projectSchema = new Schema<IProject>(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tech: [
            {
                type: String,
            },
        ],
        live: String,
        github: String,
        image: {
            type: String,
            default: "",
        },

        // ✅ POSITION FIELD
        position: {
            type: Number,
            default: 0, // lower = higher priority
        },
    },
    { timestamps: true }
);

export default mongoose.model<IProject>("Project", projectSchema);