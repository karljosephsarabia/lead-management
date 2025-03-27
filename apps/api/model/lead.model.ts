import mongoose, { Document, Schema } from "mongoose";
import leadStatus from "../constant/leadStatus";


//Interface representing the structure of a lead document.
export interface LeadInterface extends Document {
    name: string;
    email: string;
    status: leadStatus;
    createdAt: Date,
    updatedAt: Date,
}

//Mongoose schema for lead.
export const LeadSchema: Schema = new Schema<LeadInterface>(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, unique: true },
        status: { type: String, enum: Object.values(leadStatus), required: true, default: leadStatus.NEW }
    },
    {
        timestamps: true
    }
);

//Mongoose model for lead.
export const LeadModel = mongoose.model<LeadInterface>("list", LeadSchema);