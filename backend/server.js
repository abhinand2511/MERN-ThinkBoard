import express from "express";

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

app.listen(5000, () => {
    console.log("Server started")
})