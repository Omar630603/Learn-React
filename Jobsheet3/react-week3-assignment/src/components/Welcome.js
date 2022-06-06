import React from "react";
import Button from "./Button";

const Welcome = (props) => {
  return (
    <div className="container d-flex align-items-center flex-column">
      <p className="text-center">
        This is the Login UI for Job Sheet 3's assignment
      </p>
      <Button
        path="/login"
        type="btn btn-primary Btn rounded-pill"
        text="Launch"
      />
    </div>
  );
};
export default Welcome;
