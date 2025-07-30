import express from "express";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.get("/aa/bb", (req, res) => {
    res.send("hoooooyyyyy cccc");
});

app.post("/aa/bb", (req, res) => {
    res.status(201).json({message: "created successfully"});
});

app.put("/aa/bb", (req, res) => {
    res.status(200).json({message: "updated successfully"});
});

app.delete("/aa/bb", (req, res) => {
    res.status(200).json({message: "deleted successfully"});
});

connectDB();

app.listen(5000, () => {
    console.log("Server started")
})

//mongodb+srv://abhinand25112001:zRfCDDjYiyKfuofC@cluster0.pfek0wt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0