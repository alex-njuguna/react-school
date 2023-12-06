import React from "react"
import { useState } from "react"
import femaleProfile from "./images/femaleProfile.jpg"
import maleProfile from "./images/maleProfile.jpg"


const Employees = () => {

    const [selectedTeam, setTeam] = useState("TeamB")

    const [employees, setEmployees] = useState(
        [
            {
                id: 1,
                fullName: "Bob Jones",
                designation: "JavaScript Developer",
                gender: "male",
                teamName: "TeamA"
            },
            {
                id: 2,
                fullName: "Jill Bailey",
                designation: "Node Developer",
                gender: "female",
                teamName: "TeamA"
            },
            {
                id: 3,
                fullName: "Gail Shepherd",
                designation: "Java Developer",
                gender: "female",
                teamName: "TeamA"
            },
            {
                id: 4,
                fullName: "Sam Reynolds",
                designation: "React Developer",
                gender: "male",
                teamName: "TeamB"
            },
            {
                id: 5,
                fullName: "David Henry",
                designation: "DotNet Developer",
                gender: "male",
                teamName: "TeamB"
            },
            {
                id: 6,
                fullName: "Sarah Blake",
                designation: "SQL Server DBA",
                gender: "female",
                teamName: "TeamB"
            },
            {
                id: 7,
                fullName: "James Bennet",
                designation: "Angular Developer",
                gender: "male",
                teamName: "TeamC"
            },
            {
                id: 8,
                fullName: "Jessica Faye",
                designation: "API Developer",
                gender: "female",
                teamName: "TeamC"
            },
            {
                id: 9,
                fullName: "Lita Stone",
                designation: "C++ Developer",
                gender: "female",
                teamName: "TeamC"
            },
            {
                id: 10,
                fullName: "Daniel Young",
                designation: "Python Developer",
                gender: "male",
                teamName: "TeamD"
            },
            {
                id: 11,
                fullName: "Adrian Jacobs",
                designation: "Vue Developer",
                gender: "male",
                teamName: "TeamD"
            },
            {
                id: 12,
                fullName: "Devin Monroe",
                designation: "Graphic Designer",
                gender: "male",
                teamName: "TeamD"
            }
        ]
    )

    function handleTeamSelection(event){
        console.log(event.target.value)
        setTeam(event.target.value)
    }

    function handleEmployeeCardClick(event) {
        const transformedEmployees = employees.map((employee) => {
            if (employee.id === parseInt(event.currentTarget.id)) {
                if (employee.teamName === selectedTeam) {
                    return { ...employee, teamName: "" };
                } else {
                    return { ...employee, teamName: selectedTeam };
                }
            } else {
                return employee;
            }
        });

        setEmployees(transformedEmployees);
    }


    return (
        <main>
            <div className="container mt-5 mb-3 justify-content-center">

                <div className="row w-75 m-auto">
                    <select value={selectedTeam} onChange={handleTeamSelection} className="form-select form-select-lg">
                        <option value="TeamA">Team A</option>
                        <option value="TeamB">Team B</option>
                        <option value="TeamC">Team C</option>
                        <option value="TeamD">Team D</option>
                    </select>
                </div>

                <div className="row mt-4">
                    {employees.map((employee) => (
                    <div className="col-md-2">
                        <div id={employee.id} className={(employee.teamName === selectedTeam ? "card m-2 text-center bg-secondary text-light" : "card m-2 text-center")} onClick={handleEmployeeCardClick}>
                            <div className="card-img-top mt-2" style={{ cursor: "pointer" }}>
                                {(employee.gender === "female") ? <img src={femaleProfile} alt="female avatar"/> 
                                : <img src={maleProfile} alt="male avatar"/>
                                }
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <strong>Full Name:</strong> {employee.fullName}
                                </div>
                                <div className="card-text">
                                    <strong>Designation: </strong>{employee.designation}
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
            
        </main>
    )
}


export default Employees