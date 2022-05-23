import React from "react"; // Component using Function
import Input from "./Input";
import CheckBox from "./CheckBox";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Login = () => {
  return (
    <div className="card mt-5 cardCustom">
      <div className="card-header text-center">Login Form</div>
      <div className="d-flex align-items-center flex-column">
        <Input
          id="username"
          icon={faUser}
          type="text"
          placeholder="Input your Username"
        />
        <Input
          id="password"
          icon={faLock}
          type="text"
          placeholder="Input your password"
        />
        <CheckBox type="checkbox" text="Remember me!" />
        <Button
          path="/home"
          type="btn btn-dark Btn rounded-pill"
          text="Login"
        />
        <Button
          path="/"
          type="btn btn-secondary Btn mt-3 rounded-pill"
          text="Cancel"
        />
      </div>
    </div>
  );
};
export default Login;
