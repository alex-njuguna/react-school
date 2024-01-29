import { useState } from "react";

export default function Experience() {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [stopDate, setStopDate] = useState("");

  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <fieldset>
          <div className="field">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={companyName}
              placeholder="Google"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              name="position"
              id="position"
              value={position}
              placeholder="Finance Consultant"
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="field">
            <label
              style={{ marginRight: "1rem", fontSize: "large" }}
              htmlFor="responsibilities"
            >
              Responsibilities:
            </label>
            <textarea
              style={{
                padding: "0.4rem 0.6rem",
                width: "16rem",
                border: "none",
                fontSize: "large",
                borderRadius: "10px",
                background: "pink",
                color: "black",
              }}
              name="responsibilities"
              id="responsibilities"
              value={responsibilities}
              placeholder="..."
              onChange={(e) => setResponsibilities(e.target.value)}
            ></textarea>
          </div>

          <div className="field">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="stopDate">Stop Date:</label>
            <input
              type="date"
              name="stopDate"
              id="stopDate"
              value={stopDate}
              onChange={(e) => setStopDate(e.target.value)}
            />
          </div>
        </fieldset>
      </div>
    </>
  );
}
