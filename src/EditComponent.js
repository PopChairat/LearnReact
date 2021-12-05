import React, { Component } from "react";
import { connect } from "react-redux";

class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage,
    };
    this.props.dispatch({
      type: "UPDATE_POST",
      id: this.props.post.id,
      data: data,
    });
  };

  render() {
    return (
      <div className="post">
        <form className="form" onSubmit={this.handleEdit}>
          <input
            type="text"
            ref={(input) => (this.getTitle = input)}
            defaultValue={this.props.post.title}
            placeholder="Enter post title"
            required
          />
          <br />
          <br />
          <textarea
            ref={(input) => (this.getMessage = input)}
            defaultValue={this.props.post.message}
            col="30"
            rows="5"
            placeholder="Enter post"
            required
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);
