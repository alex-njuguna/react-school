import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function App() {
  const [educationList, setEducationList] = useState([]);

  function addEducation() {
    setEducationList([...educationList, <Education key={uuid()} />]);
  }

  return (
    <>
      <h2>Personal Information</h2>
      <PersonalInfo />
      <h2>Educational Background</h2>
      <Education />
      {educationList}
      <button
        style={{ backgroundColor: "crimson", marginTop: "1rem" }}
        onClick={addEducation}
      >
        Add
      </button>
    </>
  );
}
