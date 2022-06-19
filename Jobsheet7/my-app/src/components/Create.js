import React, { Component } from "react";
import firebase from "../firebase/firebase";
import { Link } from "react-router-dom";

class Create extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("articles");
    this.state = { title: "", body: "", author: "" };
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { title, body, author } = this.state;
    this.ref
      .add({
        title,
        body,
        author,
      })
      .then((docRef) => {
        this.setState({ title: "", body: "", author: "" });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  render() {
    const { title, body, author } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title"> Add Article </h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/" className="btn btn-primary">
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
                  value={title}
                  onChange={this.onChange}
                  placeholder="Title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="body">Body:</label>
                <textarea
                  className="form-control"
                  name="body"
                  onChange={this.onChange}
                  placeholder="Body"
                  cols="80"
                  rows="3"
                  value={body}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  value={author}
                  onChange={this.onChange}
                  placeholder="Author"
                />
              </div>
              <button type="submit" className="btn btn-success mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Create;
