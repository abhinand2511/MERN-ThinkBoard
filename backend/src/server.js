import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use("/api/notes", notesRoutes)
 
connectDB();

app.listen(PORT, () => {
    console.log("Server started")
})

//mongodb+srv://abhinand25112001:zRfCDDjYiyKfuofC@cluster0.pfek0wt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0