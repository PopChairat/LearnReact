//#step 6 Display ค่าที่ได้รับจาก user
import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
//เอาทุก post มาแสดง (posts)
class AllPost extends Component {
  render() {
    return (
      <div>
        <h1>All Post</h1>
        {this.props.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}
//ทำการ แปลง state ของ Redux ให้อยู่ในรูปของ props ของ React
const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};

//เชื่อม Component เข้ากับ Redux Store
export default connect(mapStateToProps)(AllPost);
