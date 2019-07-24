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

  // useEffect(() => {
  //   if (localStorage.getItem("teamMembers"))
  //     setTeamMembers(JSON.parse(localStorage.getItem("teamMembers")));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  // }, [teamMembers]);

  function handleChange(event) {
    const newMember = {
      ...updatedMember,
      [event.target.name]: event.target.value
    };
    setTeamMembers(newMember);
    console.log(teamMembers);
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
        handleChange={handleChange}
        // addMember={addTeamMember}
        // // editMember={editTeamMember}
        // memberEdit={memberEdit}
      />
      {/* <div className="form-group">
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
              // edit={setMemberEdit}
            />
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
