import React, { useState } from "react";
import {Form,TeamMember} from './components';
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  const [teamMembers,setTeamMembers] = useState([]);
  const [memberEdit, setMemberEdit] = useState('');
}
useEffect(() => {
  if (localStorage.getItem('teamMembers'))
    setTeamMembers(JSON.parse(localStorage.getItem('teamMembers')));
}, []);

useEffect(() => {
  localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
}, [teamMembers]);

const addTeamMember = newMember => {
  setTeamMembers([...teamMembers, { ...newMember, id: teamMembers.length }]);
};

const editTeamMember = newMember => {
  setTeamMembers(
    teamMembers.map(member => {
      if (member.id === newMember.id) return newMember;
      else return member;
    })
  );
  setMemberToEdit('');
};

return (
  <div className='text-center max-w-2xl mx-auto'>
    <h1 className='text-3xl font-bold my-3'>Team Time</h1>
    <Form
      addMember={addTeamMember}
      editMember={editTeamMember}
      memberEdit={memberEdit}
    />
    <div className='mx-auto max-w-xs'>
      {teamMembers.map(member => {
        return (
          <TeamMember
            key={member.id}
            memberInfo={member}
            edit={setMemberEdit}
          />
        );
      })}
    </div>
  </div>
);


export default App;
