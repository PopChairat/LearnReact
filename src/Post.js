//#step 7 แสดง item ใน Posts
import React, { Component } from "react";
import { connect } from "react-redux";
class Post extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.message}</p>
        <button>Edit</button>
        <button
          onClick={() =>
            this.props.dispatch({ type: "DELETE_POST", id: this.props.post.id })
          }
        >
          Delete
        </button>
      </div>
    );
  }
}
//เชื่อม Component เข้ากับ Redux Store
export default connect()(Post);
