import React from "react";

function TitleInput(props) {
  return (
    <input
      name="title"
      onChange={props.change}
      value={props.value}
      placeholder="Title"
    />
  );
}

export default TitleInput;
