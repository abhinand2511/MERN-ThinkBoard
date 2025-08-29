export const getAllNotes = async (req, res) => {
    res.json({message:"You just fetched the notes"});
};

export const createNote = (req, res) => {
    res.json({message:"Note created successfully!"});
}

export const updateNote = (req, res) => {
    res.json({message:"Note updated successfully!"});
}

export const deleteNote = (req, res) => {
    res.json({message:"Note deleted successfully!"});
}