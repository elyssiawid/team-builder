import React, { useState, useEffect } from "react";

const Form = props => {
  //   const [inputValue, setInputValue] = useState({
  //     name: "",
  //     email: "",
  //     role: ""
  //   });

  //   useEffect(() => {
  //     if (props.memberEdit) setInputValue(props.memberEdit);
  //   }, [props.memberEdit]);

  //   useEffect(() => {
  //     if (props.memberEdit) setInputValue(props.memberEdit);
  //   }, [props.memberEdit]);

  //   const submit = e => {
  //     e.preventDefault();
  //     if (props.memberToEdit) props.editMember(inputValue);
  //     else props.addMember(inputValue);
  //     setInputValue({
  //       name: "",
  //       email: "",
  //       role: ""
  //     });
  //   };

  return (
    <div className="form-container">
      <form onChange={props.handleChange}>
        <label>Name</label>
        <input type="text" name="name" required />
      </form>
    </div>
    // <div className="form-group">
    //   <form onSubmit={e => submit(e)}>
    //     <div className="form-label">
    //       <label className="mr-2">Name</label>
    //       <input
    //         type="text"
    //         placeholder="Marguel"
    //         value={inputValue.name}
    //         className="form-control"
    //         onChange={e =>
    //           setInputValue({ ...inputValue, name: e.target.value })
    //         }
    //       />
    //     </div>
    //     <div className="form-group">
    //   <form onSubmit={e => submit(e)}>
    //     <div className="form-label">
    //       <label className="mr-2">Name</label>
    //       <input
    //         type="text"
    //         placeholder="Marguel"
    //         value={inputValue.name}
    //         className="form-control"
    //         onChange={e =>
    //           setInputValue({ ...inputValue, name: e.target.value })
    //         }
    //       />
    //     </div>
    //     <form onSubmit={e => submit(e)}>
    //     <div className="form-label">
    //       <label className="mr-2">Name</label>
    //       <input
    //         type="text"
    //         placeholder="Marguel"
    //         value={inputValue.name}
    //         className="form-control"
    //         onChange={e =>
    //           setInputValue({ ...inputValue, name: e.target.value })
    //         }
    //       />
    //     </div>
    //       >
    //         <option value="" selected="selected" hidden="hidden">
    //           Choose...
    //         </option>
    //         <option value="UI Developer">UI Developer I </option>
    //         <option value="Front-End Engineer">Front-End Engineer</option>
    //         <option value="Back-End Engineer">Back-End Engineer</option>
    //         <option value="UX Designer">UX Designer</option>
    //         <option value="Team Lead">UI Developer II</option>
    //       </select>
    //     </div>
    //     <div className="buttons">
    //       <button
    //         className={`formButton${
    //           +(
    //             inputValue.name === "" ||
    //             inputValue.email === "" ||
    //             inputValue.role === ""
    //           )
    //             ? " opacity-50 cursor-not-allowed"
    //             : " hover:bg-blue-200"
    //         }`}
    //         type="submit"
    //         onSubmit={e => submit(e)}
    //       >
    //         {props.memberToEdit ? "Update" : "Add"}
    //       </button>
    //       {/* <input className='formButton' type='reset' onClick={resetForm} /> */}
    //     </div>
    //   </form>
    // </div>
  );
};

export default Form;
