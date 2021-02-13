import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

type TInput = {
    db: string;
}
export default ({db}: TInput) => {
    const connect = () => {
        mongoose
            .connect(
                db,
                {   autoIndex: true,
                    reconnectTries: Number.MAX_VALUE,
                    reconnectInterval: 500,
                    poolSize: 50,
                    bufferMaxEntries: 0,
                    useNewUrlParser: true,
                }
            )
            .then(() => {
                return console.info(`Succesfully connected to ${db}`);
            })
            .catch(error => {
                console.log(`Error connecting to database: `, error);
                return process.exit(1);
            });
    };
    connect();

    mongoose.connection.on('disconnected', connect);
}