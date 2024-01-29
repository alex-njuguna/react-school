import { useState } from "react";

export default function Education() {
  const date = new Date();

  const [school, setSchool] = useState("");
  const [course, setCourse] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState(date.getFullYear());

  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <fieldset>
          <div className="field">
            <label htmlFor="school">School:</label>
            <input
              type="text"
              name="school"
              id="school"
              value={school}
              placeholder="University of Nairobi"
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="course">Course:</label>
            <input
              type="text"
              name="course"
              id="course"
              value={course}
              placeholder="Applied Mathematics"
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              id="date"
              value={dateOfStudy}
              placeholder="University of Nairobi"
              onChange={(e) => setDateOfStudy(e.target.value)}
            />
          </div>
        </fieldset>
      </div>
    </>
  );
}
