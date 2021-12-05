import React, { Component } from "react";
export default class PostForm extends Component {
  render() {
    return (
      <div>
        <h1>Creat Post</h1>
        <form action="">
          <input type="text" placeholder="Enter post title" required />
          <br />
          <br />
          <textarea col="30" rows="5" placeholder="Enter post" required />
          <br />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}
