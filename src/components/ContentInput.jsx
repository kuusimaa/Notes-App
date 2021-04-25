import React from "react";

function ContentInput(props) {
  return (
    <textarea
      name="content"
      placeholder="Take a note..."
      value={props.value}
      rows={props.rows}
      onClick={props.expand}
      onChange={props.change}
    />
  );
}

export default ContentInput;
