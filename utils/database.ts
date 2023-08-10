import mongoose, {ConnectOptions} from "mongoose";

let isConnected: boolean = false

export const connectionDB = async() => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: 'TaskList',
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions)
    } catch (error) {
        console.log('error connectionDB :>> ', error);
    }
}