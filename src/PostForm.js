//#Step5 สร้าง Form รับ Input จาก user
import React, { Component } from "react";
import { connect } from "react-redux";

class PostForm extends Component {
  handleSubmit = (e) => {
    //ไม่ให้ refresh หน้าถ้ากด Submit Button
    e.preventDefault();
    //เอา input จาก user มาใส่ const
    const title = this.getTitle.value; //value is input
    const message = this.getMessage.value; //value is input (text area)
    //สร้าง Object ขึ้นมาจาก ตัวแปรด้านบน
    const data = {
      id: new Date(),
      title,
      message,
      editing: false,
    };
    console.log("data PostForm: ", data);

    //Save data to store at index.js
    this.props.dispatch({
      type: "ADD_POST",
      data,
    });

    //Resetค่า เพื่อพร้อมรับ input อันถัดไป
    this.getTitle.value = "";
    this.getMessage.value = "";
  };

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Creat Post</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={(input) => (this.getTitle = input)}
            placeholder="Enter post title"
            required
          />
          <br />
          <br />
          <textarea
            ref={(input) => (this.getMessage = input)}
            col="30"
            rows="5"
            placeholder="Enter post"
            required
          />
          <br />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

//เชื่อม Component เข้ากับ Redux Store
export default connect()(PostForm);
