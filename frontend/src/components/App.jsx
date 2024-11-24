import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  // Backend URL from environment variable
  const backendUrl = process.env.REACT_APP_LINK_TO_BACKEND || 'http://localhost:5000'; // Fallback to localhost if the env variable is not set

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/contacts`)
      .then((response) => {
        setNotes(response.data); // Set the fetched data to notes
      })
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  function addNote(newNote) {
    axios
      .post(`${backendUrl}/api/contacts`, newNote, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setNotes((prevNotes) => [...prevNotes, response.data]);
      })
      .catch((error) => console.error("Error Adding:", error));
  }

  function deleteNote(id) {
    axios
      .delete(`${backendUrl}/api/contacts/${id}`)
      .then(() => {
        // Fetch the updated list after deletion
        axios
          .get(`${backendUrl}/api/contacts`)
          .then((response) => {
            setNotes(response.data); // Update the state with new data
          })
          .catch((error) => console.error("Error fetching notes:", error));
      })
      .catch((error) => console.error("Error Deleting:", error));
  }

  function editNote(id, editValue) {
    axios
      .put(`${backendUrl}/api/contacts/${id}`, editValue)
      .then(() => {
        // After updating, fetch all notes again to refresh the list
        axios
          .get(`${backendUrl}/api/contacts`)
          .then((response) => {
            setNotes(response.data); // Set the fetched data to notes
          })
          .catch((error) => console.error("Error fetching notes:", error));
      })
      .catch((error) => console.error("Error editing:", error));
  }

  let num = 0;
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="excel-table">
        <table>
        <colgroup>
        <col className="col-1" />
      <col className="col-2" />
      <col className="col-3" />
      <col className="col-4" />
      <col className="col-5" />
      <col className="col-6" />
      <col className="col-7" />
      <col className="col-8" />
      <col className="col-9" />
            </colgroup>
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Contact Number</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Job Title</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            {notes.map((noteItem, index) => {
              num++;
        return (
          <Note
            key={index}
            sno={num}
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

        </table>
    </div>

      <Footer />
    </div>
  );
}

export default App;
