import mongoose from 'mongoose';

export const connectDB = async() => {
    try {
         await mongoose.connect(process.env.DB_URI as string);
         console.log("DB Connected Successfully");
    } catch (err) {
         console.log("error", err);
    }
}