import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = (props) => {
  return (
    <div className="d-flex align-items-center">
      <FontAwesomeIcon className="icon" icon={props.icon}></FontAwesomeIcon>
      <input
        className="loginInput mt-5"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};
export default Input;
