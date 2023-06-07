import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongodb host ${conn.connection.host}`.bgMagenta.white);
    }catch(error) {
        console.log(`errors in ${error}`.bgRed.white);
    }
    
}
 export default connectDB;