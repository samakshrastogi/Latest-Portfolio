import mongoose, { Schema, Document } from "mongoose";

export interface IFeature extends Document {
    name: string;
    enabled: boolean;
}

const featureSchema = new Schema<IFeature>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        enabled: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model<IFeature>("Feature", featureSchema);