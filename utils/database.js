import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({path: "/Users/macbook/Desktop/share_prompts/share_prompts/utils/.env"});

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('Mongodb is already connected')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
    }
}