import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
  useMatch,
} from "react-router-dom";

export default function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/topics/*" element={<Topics />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function Topics() {
  const match = useMatch("/topics/*");
  console.log(match);
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.uri}/Fried rice, Satay`}>Food</Link>
        </li>
        <li>
          <Link to={`${match.uri}/Beach, Museum`}>Travelling</Link>
        </li>
        <li>
          <Link to={`${match.uri}/Solaris, JW Marriot`}>Review</Link>
        </li>
      </ul>
      <Routes>
        <Route
          exact
          path={`${match.path}`}
          element={<h3>Please select a topic</h3>}
        ></Route>
        <Route path={`${match.path}/:topicId`} element={<Topic />}></Route>
      </Routes>
    </div>
  );
}
function Topic() {
  let { topicId } = useParams();
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
