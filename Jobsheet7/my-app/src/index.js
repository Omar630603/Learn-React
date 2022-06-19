import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Edit from "./components/Edit";
import Create from "./components/Create";
import Show from "./components/Show";
function Jobsheet7() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/show/:id" element={<Show />} />
      </Routes>
    </Router>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Jobsheet7 />);
serviceWorker.unregister();
