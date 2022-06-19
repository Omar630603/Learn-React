import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import firebase from "./firebase/firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("articles");
    this.unsubscribe = null;
    this.state = { articles: [] };
  }
  onCollectionUpdate = (querySnapshot) => {
    const articles = [];
    querySnapshot.forEach((doc) => {
      const { title, body, author } = doc.data();
      articles.push({
        key: doc.id,
        doc,
        title,
        body,
        author,
      });
    });
    this.setState({ articles });
  };
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title"> Article List </h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/create" className="btn btn-primary">
                Add Article
              </Link>
            </h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.articles.map((article) => (
                  <tr key={article.key}>
                    <td>
                      <Link to={`/show/${article.key}`}>{article.title}</Link>
                    </td>
                    <td>{article.body}</td>
                    <td>{article.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
