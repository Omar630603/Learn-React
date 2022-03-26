import React from "react";

const CheckBox = (props) => {
  return (
    <div className="d-flex mt-5 ms-5 align-self-start">
      <input className="mt-1" type={props.type} />
      <p className="ms-2">{props.text}</p>
    </div>
  );
};
export default CheckBox;
