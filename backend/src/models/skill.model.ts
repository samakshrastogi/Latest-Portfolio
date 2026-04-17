import mongoose, { Schema, Document } from "mongoose";

export interface ISkill extends Document {
    category: string;
    items: string[];
    position: number; // ✅ NEW
}

const skillSchema = new Schema<ISkill>(
    {
        category: {
            type: String,
            required: true,
        },
        items: [
            {
                type: String,
            },
        ],
        position: {
            type: Number,
            default: 0, // ✅ fallback
        },
    },
    { timestamps: true }
);

export default mongoose.model<ISkill>("Skill", skillSchema);