import express from "express";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/api/notes", (req, res) => {
    res.send("You got 10 notes");
});

app.post("/api/notes", (req, res) => {
    res.json({message:"Note created successfully!"});
});

app.put("/api/notes/:id", (req, res) => {
    res.json({message:"Note updated successfully!"});
});



connectDB();

app.listen(PORT, () => {
    console.log("Server started")
})

//mongodb+srv://abhinand25112001:zRfCDDjYiyKfuofC@cluster0.pfek0wt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0