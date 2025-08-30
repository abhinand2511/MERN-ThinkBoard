import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
   try{
    const notes = await Note.find()
    res.status(200).json(notes)
   } catch(error){
    console.error("Error in getAllNotes controller",error)
    res.status(500).json({message:"Internal server error"})
   }
};

export const createNote = async (req, res) => {  
    try{
        const {title, content} = req.body;
        const newNote = new Note({title, content});

        const savedNote = await newNote.save()
        res.status(201).json({message:"Notes created successfully", note:savedNote})
        }catch(error){
            console.error("Error in createNote controller",error)
    res.status(500).json({message:"Internal server error"})
    }
}

export const updateNote = (req, res) => {
    res.json({message:"Note updated successfully!"});
}

export const deleteNote = (req, res) => {
    res.json({message:"Note deleted successfully!"});
}