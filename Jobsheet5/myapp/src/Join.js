import React, { useContext, useState } from "react";
import { AuthContext } from "./index";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) {
          Auth.setLoggedIn(true);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const googoleJoin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Auth.setLoggedIn(true);
      });
  };
  return (
    <div>
      <h1>Join</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="password"
        />
        <hr />
        <button className="googleBtn" type="button" onClick={googoleJoin}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Join with Google
        </button>
        <button type="submit">Join</button>
        <span>{error}</span>
      </form>
    </div>
  );
};
export default Join;
