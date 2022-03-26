import React from "react"; // Component using Function
const Button = (props) => {
  return (
    <a href={props.path} type="button" className={props.type}>
      {props.text}
    </a>
  );
};
export default Button;
