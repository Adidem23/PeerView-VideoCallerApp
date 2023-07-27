import mongoose from "mongoose";

export async function connect(){

try {
    mongoose.connect(process.env.MONGO_URI!);

    const connection=mongoose.connection;

    connection.on('connected',()=>{
        console.log("MongoConnected")
    })

    connection.on('error',(err)=>{
        console.log(`Error is ${err}`);
        process.exit();
    })
    
} catch (error) {
    console.log(`Error Has Been Occured ${error}`);
    
}

}