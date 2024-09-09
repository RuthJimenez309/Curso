import mongoose from "mongoose"


export const connectDB =  async () => {
   try {
      const conn = await mongoose.connect( process.env.MONGO_URL)
      console.log(`MonggoDB connection: ${conn.connection.host}`)
   } catch(error){
     console.log("Error connecting to MongoDB: " , error.massage);
     process.exit(1)// exit
   }

}