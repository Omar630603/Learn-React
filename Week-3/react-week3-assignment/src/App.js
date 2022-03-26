import "./App.css";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="mt-5 container d-flex align-items-center flex-column">
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
