import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import ContentInput from "./ContentInput";
import TitleInput from "./TitleInput";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <form className="create-note">
        {isExpanded && <TitleInput change={handleChange} value={note.title} />}
        <ContentInput
          
          value={note.content}
          rows={isExpanded ? "3" : "1"}
          expand={() => setIsExpanded(true)}
          change={handleChange}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
