import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manjuladeviselvaraj12:5ZkEx7%7COJQAOV39Zcluster0.wfmvk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log("Database Connected"))
        .catch((err) => console.error("Database connection failed:", err));
};
