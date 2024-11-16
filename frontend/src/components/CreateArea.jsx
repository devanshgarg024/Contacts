import React, { useState,useEffect,useRef } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    company: "",
    job_title: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

// function displayError(){

// }
// function displayOnlyDigitsError(){

// }
function isOnlyDigits(str) {
  const regex = /^[0-9]+$/;  // This regex matches only strings that contain digits (0-9)
  return regex.test(str);
}
  function submitNote(event) {
    // if(note.first_name===0||note.contact_number===0){
    //   displayError;
    //   return ;
    // }
    // if(!isOnlyDigits(note.contact_number)){
    //   displayOnlyDigitsError;
    //   return;
    // }
    props.onAdd(note);
    setNote({
      first_name: "",
      last_name: "",
      contact_number: "",
      email: "",
      company: "",
      job_title: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }
  function noexpand() {
    setExpanded(false);
  }
  return (
    <div >
        <Zoom in={!isExpanded}>
          <Fab onClick={expand}>
            <AddIcon />
          </Fab>
        </Zoom>
        {isExpanded && (
          <div >
            <form className="create-note" >
            <Zoom className ="cross-button" in={true}>
          <Fab onClick={noexpand}>
            <CloseIcon></CloseIcon>
          </Fab>
        </Zoom>
            <input
              name="first_name"
              onChange={handleChange}
              value={note.first_name}
              placeholder="First Name"
            />
            <textarea
          name="last_name"
          onClick={expand}
          onChange={handleChange}
          value={note.last_name}
          placeholder="Last name"
        />
        <textarea
          name="contact_number"
          onClick={expand}
          onChange={handleChange}
          value={note.contact_number}
          placeholder="Ph. Number"
        />
        <textarea
          name="email"
          type="email"
          onClick={expand}
          onChange={handleChange}
          value={note.email}
          placeholder="Email"
        />        
        <textarea
        name="company"
        onClick={expand}
        onChange={handleChange}
        value={note.company}
        placeholder="Company"
        />        
        <textarea
        name="job_title"
        onClick={expand}
        onChange={handleChange}
        value={note.job_title}
        placeholder="Job Title"
        />
        <Zoom  className="save-icon" in={isExpanded}>
          <Fab  onClick={submitNote}>
            <SaveIcon className="SaveImage"/>
          </Fab>
        </Zoom>
        </form> 
        </div>
        )}
    </div>
  );
}

export default CreateArea;
