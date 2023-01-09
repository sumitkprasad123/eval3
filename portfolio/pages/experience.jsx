import React from "react";
const  style={
      border: "1px solid black",
      gap: "5px",
      padding: "1rem",
      marginBottom: "1rem",
}

const Experience = () => {
  return (
    <div
      style={{
        gap: "5px",
        padding: "1rem",
        gap: "20px",
        border:"1px solid red"
      }}
    >
      <div style={style} >
        <h4>Masai School,Bengaluru</h4>
        <p>May 2022 - Present</p>
      </div>

      <div style={style}>
        <h4>Dumka Engineering College,Dumka</h4>
        <p>september 2014 - september 2018</p>
      </div>

      <div style={style}>
        <h4>YSM college,Ranchi</h4>
        <p>july 2011 - september 2013</p>
      </div>
    </div>
  );
};

export default Experience;

