import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/fetchContacts") // Adjust the URL if needed
      .then((response) => {
        setNotes(response.data); // Set the fetched data to notes
      })
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  function addNote(newNote) {
    axios
      .post("http://localhost:5000/api/addContacts", newNote, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // The response data from axios is in `response.data`
        setNotes((prevNotes) => [...prevNotes, response.data]);
      })
      .catch((error) => console.error("Error Adding:", error));
  }

  function deleteNote(id) {
    axios
    .delete(`http://localhost:5000/api/deleteContacts/${id}`)
    .then((response) => {
      axios
      .get("http://localhost:5000/api/fetchContacts") // Adjust the URL if needed
      .then((response) => {
        setNotes(response.data); // Set the fetched data to notes
      })
      .catch((error) => console.error("Error fetching notes:", error));
    })
    .catch((error) => console.error("Error Deleting:", error));

  }
  function editNote(id, editValue) {
    axios
      .put(`http://localhost:5000/api/editContacts/${id}`, editValue)  // Use backticks for string interpolation
      .then((response) => {
        // After updating, fetch all notes again to refresh the list
        axios
          .get("http://localhost:5000/api/fetchContacts")  // Adjust the URL if needed
          .then((response) => {
            setNotes(response.data); // Set the fetched data to notes
          })
          .catch((error) => console.error("Error fetching notes:", error));
      })
      .catch((error) => console.error("Error editing:", error));  // Adjust error message to match function purpose
  }
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.key}
            first_name={noteItem.first_name}
            last_name={noteItem.last_name}
            contact_number={noteItem.contact_number}
            email={noteItem.email}
            company={noteItem.company}
            job_title={noteItem.job_title}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
