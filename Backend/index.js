import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
// import the routes 
import bookRoute from "./routes/bookRouter.js"
import userRoute from "./routes/userRouter.js"

const app = express();

app.use(cors()); // exchange data from diff. ports
app.use(express.json())

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDBURI

//connect to mongodb

mongoose.connect(URI)
.then(() => console.log('Database connected'))
.catch(err => console.error('Database connection error:', err));


// defining the routes 
app.use("/book",bookRoute);
app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`);
    
})