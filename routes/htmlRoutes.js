const note = require("express").Router();
const { readFromFile, writeToFile, readAndAppend } = require("../utilities/fs");

// get note
note.get("/", (req, res) => {
  // parses JSON data response
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// posting new note
note.post("/", (req, res) => {
  // gets title and text from request body
  const { title, text } = req.body;

  // check if title and text exist
  if (title && text) {
    // grab the current date (time)
    var id = Date.now();
    // construct a new note object with the title, text, and id (time)
    const addNote = {
      title,
      text,
      id,
    };
    // write note information to db.json
    console.log(addNote);

    readAndAppend(addNote, "./db/db.json");

    // writeToFile("./db/db.json", addNote); // this is wrong? why does it only add one note?
    // send a response to the client
    console.log("Note added successfully yay");
    res.json("Note added successfully yay");
  } else {
    console.error("Note adding error nay");
    res.error("Note adding error nay");
  }
});

// delete note
// id is required to delete a note
note.delete("/:id", (req, res) => {
  // gets id from request parameters
  const id = Number(req.params.id);

  // gets all notes from db.json
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      // filters out the note with the matching id
      const result = json.filter((note) => note.id !== id);
      // readAndAppend(result, "./db/db.json"); // this is wrong
      writeToFile("./db/db.json", result);
      res.json("Note deleted yay");
      console.log("Note deleted yay");
    });
});

module.exports = note;
