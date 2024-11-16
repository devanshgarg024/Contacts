import React, { useState,useEffect,useRef } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [error1, setError1] = useState("*First_name or Ph. Number can not be empty!");
  const [error2, setError2] = useState("*Ph. Number must contain only DIGITS!");
  const [color, setColor] = useState('grey'); // default color

  const [note, setNote] = useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    company: "",
    job_title: "",
  });
  
  function isOnlyDigits(str) {
    const regex = /^\d+$/;
    return regex.test(str);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
    if(note.first_name.length==0||note.contact_number.length==0){
      setError1("*First_name or Ph. Number can not be empty!")

    }
    else setError1('');
    if(!isOnlyDigits(note.contact_number)){
      setError2("*Ph. Number must contain only DIGITS!")

    }
    else setError2('');

  }
  function wrongsubmission(){
   setColor('red');
  }

  function submitNote(event) {
    if(note.first_name===0||note.contact_number===0){
      wrongsubmission();
      return;
    }
    if(!isOnlyDigits(note.contact_number)){
      wrongsubmission();

      return;
    }
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
            <p style={{ color }}>{error1}</p>
            <p style={{ color }}>{error2}</p>
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
            <input
          name="last_name"
          onClick={expand}
          onChange={handleChange}
          value={note.last_name}
          placeholder="Last name"
        />
        <input
          name="contact_number"
          onClick={expand}
          onChange={handleChange}
          value={note.contact_number}
          placeholder="Ph. Number"
        />
        <input
          name="email"
          type="email"
          onClick={expand}
          onChange={handleChange}
          value={note.email}
          placeholder="Email"
        />        
        <input
        name="company"
        onClick={expand}
        onChange={handleChange}
        value={note.company}
        placeholder="Company"
        />        
        <input
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
