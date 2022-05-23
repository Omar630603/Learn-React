import React from "react";
import Button from "./Button";

const Home = (props) => {
  return (
    <div className="mt-5 container d-flex align-items-center flex-column">
      <p className="text-center">Yes! you have logged In</p>
      <Button path="/" type="btn btn-danger Btn rounded-pill" text="Logout" />
    </div>
  );
};
export default Home;
