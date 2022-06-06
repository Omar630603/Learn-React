import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./Style.css";
import "tailwindcss/tailwind.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import routes from "./Routes";
import firebase from "firebase/compat/app";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router>
          <Header />
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                element={route.main}
              />
            ))}
          </Routes>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
reportWebVitals();
