import React from "react";

const Country = (props) => {
  return (
    <div style={{ border: "2px solid black" }}>
      <h1>Number 1 : {12 + 12}</h1>
      {props.name}
      <h1>Number 2 : {Math.round(Math.random() * 100)}</h1>
    </div>
  );
};

export default Country;
