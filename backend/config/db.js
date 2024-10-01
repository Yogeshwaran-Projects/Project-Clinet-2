import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manjuladeviselvaraj12:ihSg3Op9ckLo1BbO@cluster0.wfmvk.mongodb.net/myDatabase?retryWrites=true&w=majority')
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database connection failed:", err));
};

