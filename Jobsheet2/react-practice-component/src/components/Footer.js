import React from "react"; // Component using Function
const Footer = (props) => {
  return (
    <div>
      <h3 className="paragraph">Footer Page</h3>
      <h3>This component is created using Function not Class</h3>
      <p>This value is returned from props: {props.title} </p>
      <p>My name is {props.name} </p>
    </div>
  );
};
export default Footer;
