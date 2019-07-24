import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TeamMember from "./components/TeamMember";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [updatedMember, setUpdatedMember] = useState({
    name: "",
    email: "",
    role: ""
  });
  const [memberEdit, setMemberEdit] = useState("");
  let newMember = [
    // ...updatedMember,
    // [event.target.name]: event.target.value
  ];

  // useEffect(() => {
  //   if (localStorage.getItem("teamMembers"))
  //     setTeamMembers(JSON.parse(localStorage.getItem("teamMembers")));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  // }, [teamMembers]);

  function handleChange(event) {
    // setTeamMembers(newMember);
    console.log(teamMembers);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      "ALOHA",
      event.target.name.value,
      event.target.email.value,
      event.target.role.value
    );
    newMember.push(
      `Name: ${event.target.name.value},Email: ${
        event.target.email.value
      },Role: ${event.target.role.value}`
    );
    setTeamMembers(teamMembers.concat(newMember));
  }

  function handleEdit(event) {
    event.preventDefault();
    let edit = `edit: ${event.target.value}`;
    console.log(edit);
    setMemberEdit(edit);
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
  console.log(teamMembers);
  // setTeamMembers(newMember);
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
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleEdit={handleEdit}
      />
      <div className="form-group">
        {teamMembers.map(member => {
          return (
            <TeamMember
              teamMembers={teamMembers}
              setTeamMembers={setTeamMembers}
              updatedMember={updatedMember}
              setUpdateMember={setUpdatedMember}
              memberEdit={memberEdit}
              setMemberEdit={setMemberEdit}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleEdit={handleEdit}
              // edit={setMemberEdit}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
