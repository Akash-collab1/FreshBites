import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://akash281028:rOLLXJkuPsLwxENJ@cluster0.m2v10.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}
// mongodb+srv://akash281028:<db_password>@cluster0.m2v10.mongodb.net/?