import React, { useState } from "react";
// import { Form, TeamMember } from "./components";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [updatedMember, setUpdatedMember] = useState({
    name: "",
    email: "",
    role: ""
  });
  const [memberEdit, setMemberEdit] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("teamMembers"))
  //     setTeamMembers(JSON.parse(localStorage.getItem("teamMembers")));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  // }, [teamMembers]);

  function handleChange(e) {
    const newMember = {
      ...updatedMember,
      [event.target.name]: event.target.value
    };
    setTeamMembers(newMember);
  }

  // function editTeamMember (newMember) {
  //   setTeamMembers(
  //     teamMembers.map(member => {
  //       if (member.id === newMember.id) return newMember;
  //       else return member;
  //     })
  //   );
  //   setMemberToEdit("");
  // };

  return (
    <div className="form-group">
      <h1 className="form">Team</h1>
      <Form
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
        updatedMember={updatedMember}
        setUpdateMember={setUpdatedMember}
        memberEdit={memberEdit}
        setMemberEdit={setMemberEdit}
        // addMember={addTeamMember}
        // // editMember={editTeamMember}
        // memberEdit={memberEdit}
      />
      <div className="form-group">
        {teamMembers.map(member => {
          return (
            <TeamMember
              key={member.id}
              memberInfo={member}
              // edit={setMemberEdit}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
