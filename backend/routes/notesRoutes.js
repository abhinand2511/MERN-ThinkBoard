import express from "express"

const router = express.Router(); 

router.get("/api/notes", (req, res) => {
    res.send("You got 10 notes");
});

router.post("/api/notes", (req, res) => {
    res.json({message:"Note created successfully!"});
});

router.put("/api/notes/:id", (req, res) => {
    res.json({message:"Note updated successfully!"});
});

router.delete("/api/notes/:id", (req, res) => {
    res.json({message:"Note deleted successfully!"});
});


export default router