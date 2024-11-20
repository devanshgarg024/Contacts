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
    <tbody className="note" ref={noteRef}>

    {!isEditable && (
        <tr >
                    <th>{props.sno}</th>
                    <td >{props.first_name}</td>
                    <td>{props.last_name}</td>
                    <td>{props.contact_number}</td>
                    <td>{props.email}</td>
                    <td>{props.company}</td>
                    <td>{props.job_title}</td>
                    <td >
                    <button onClick={handleEdit}>
            <EditIcon />
          </button></td>
          <td>
                    <button onClick={handleDelete}>
                <DeleteIcon />
               </button>
                    </td>
        </tr>
      )}

      {isEditable && (
                  <tr>
                    <th>{props.sno}</th>
                    <td>
                    <input
            type="text"
            onChange={handleChange}
            value={note.first_name}
            name="first_name"
            placeholder="First Name"
            />
                    </td>
                    <td>
                    <input
            type="text"
            onChange={handleChange}
            value={note.last_name}
            name="last_name"
            placeholder="Last Name"
            />
                    </td>
                    <td>
                    <input
            type="text"
            onChange={handleChange}
            value={note.contact_number}
            name="contact_number"
            placeholder="Contact Number"
            />
                    </td>
                    <td>
                    <input
            type="email"
            onChange={handleChange}
            value={note.email}
            name="email"
            placeholder="Email"
            />
                    </td>
                    <td>
                      
          <input
            type="text"
            onChange={handleChange}
            value={note.company}
            name="company"
            placeholder="Company"
            />
                    </td>
                    <td>
                      
          <input
            type="text"
            onChange={handleChange}
            value={note.job_title}
            name="job_title"
            placeholder="Job Title"
            />
                    </td>
                    <td  >
                    <button onClick={handleSave}>
            <SaveIcon />
          </button>
                    </td>
                    <td>
                    <button onClick={handleDelete}>
                <DeleteIcon />
               </button>
                    </td>
                </tr>
      )}

</tbody>

  
  );
}

export default Note;
