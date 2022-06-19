import React, { Component } from "react";
import firebase from "../firebase/firebase";
import { Link } from "react-router-dom";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = { key: "", title: "", body: "", author: "" };
  }
  componentDidMount() {
    const ref = firebase.firestore().collection("articles").doc("article1");
    ref.get().then((doc) => {
      if (doc.exists) {
        const article = doc.data();
        this.setState({
          key: doc.id,
          title: article.title,
          body: article.body,
          author: article.author,
        });
      } else {
        console.log("No such document!");
      }
    });
  }
  onChange = (e) => {
    const state = (this.statestate[e.target.name] = e.target.value);
    this.setState({ article: state });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { title, body, author } = this.state;
    const updateRef = firebase
      .firestore()
      .collection("articles")
      .doc(this.state.key);
    updateRef
      .set({ title, body, author })
      .then((docRef) => {
        this.setState({ key: "", title: "", body: "", author: "" });
        this.props.history.push("/show/" + this.props.match.params.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title"> Edit Article </h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to={`/show/${this.state.key}`} className="btn btn-primary">
                Article List
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  placeholder="Title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="body">Body:</label>
                <input
                  type="text"
                  className="form-control"
                  name="body"
                  value={this.state.body}
                  onChange={this.onChange}
                  placeholder="Body"
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  value={this.state.author}
                  onChange={this.onChange}
                  placeholder="Author"
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Edit;
