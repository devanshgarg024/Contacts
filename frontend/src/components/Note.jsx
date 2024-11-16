import React, { useState, useEffect, useRef } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

function Note(props) {
  const [isEditable, setEditable] = useState(false);
  const noteRef = useRef(null); // Ref to detect clicks outside the note div

  // Handle deleting the note
  function handleDelete() {
    setEditable(false);
    props.onDelete(props.id);
  }

  // Handle toggling edit mode
  function handleEdit() {
    setEditable(!isEditable);
  }

  const [note, setNote] = useState({
    id: props.id,
    first_name: props.first_name,
    last_name: props.last_name,
    contact_number: props.contact_number,
    email: props.email,
    company: props.company,
    job_title: props.job_title,
  });

  // Handle input changes
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  // Handle saving the changes
  function handleSave() {
    props.onEdit(note.id, note);
    setEditable(false);
  }

  // Close edit mode if clicked outside the note div
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (noteRef.current && !noteRef.current.contains(event.target)) {
        setEditable(false); // Close edit mode when clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="note" ref={noteRef}>
      {!isEditable && (
        <div>
          <h1>{props.first_name}</h1>
          <p>{props.last_name}</p>
          <p>{props.contact_number}</p>
          <p>{props.email}</p>
          <p>{props.company}</p>
          <p>{props.job_title}</p>
        </div>
      )}

      {isEditable && (
        <div>
          <p>First Name</p>
          <input
            type="text"
            onChange={handleChange}
            value={note.first_name}
            name="first_name"
            placeholder="First Name"
          />

          <p>Last Name</p>
          <input
            type="text"
            onChange={handleChange}
            value={note.last_name}
            name="last_name"
            placeholder="Last Name"
          />

          <p>Contact Number</p>
          <input
            type="text"
            onChange={handleChange}
            value={note.contact_number}
            name="contact_number"
            placeholder="Contact Number"
          />

          <p>Email</p>
          <input
            type="email"
            onChange={handleChange}
            value={note.email}
            name="email"
            placeholder="Email"
          />

          <p>Company</p>
          <input
            type="text"
            onChange={handleChange}
            value={note.company}
            name="company"
            placeholder="Company"
          />

          <p>Job Title</p>
          <input
            type="text"
            onChange={handleChange}
            value={note.job_title}
            name="job_title"
            placeholder="Job Title"
          />

          <button onClick={handleSave}>
            <SaveIcon />
          </button>
          <button onClick={handleDelete}>
      <DeleteIcon />
    </button>
        </div>
      )}
      {
        !isEditable&&(
            <div>

      <button onClick={handleEdit}>
        <EditIcon />
      </button>
      <button onClick={handleDelete}>
      <DeleteIcon />
    </button>
            </div>
        )
      }


    </div>
  );
}

export default Note;
