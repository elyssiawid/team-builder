import React from "react";

function TeamMember(props) {
  return (
    <div>
      <p>members{props.teamMembers}</p>
      <p>editMembers{props.memberEdit}</p>
    </div>
  );
}

export default TeamMember;
