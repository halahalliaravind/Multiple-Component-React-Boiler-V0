import React, { Component, useState } from "react";
import "../styles/App.css";

//changed
const App = (props) => {
  return (
    <>
      <div style={{ fontSize: "16px", fontWeight: "bold" }}>
        Name of the Project: &nbsp;
        <span style={{ color: "skyblue" }}>{props["data-nsprojectname"]}</span>
      </div>
      <br></br>
      <div style={{ fontSize: "16px", fontWeight: "bold" }}>
        Description of the Project: &nbsp;
        <span style={{ color: "skyblue" }}>
          {props["data-nsprojectdescription"]}
        </span>
      </div>
    </>
  );
};
export default App;
