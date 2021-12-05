import "./App.css";
import React, { Component } from "react";
import User from "./User";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <div>
        <User username={this.props.user.name} />
        <button onClick={() => this.props.setName("Redux Pop")}>
          Change name
        </button>
      </div>
    );
  }
}
//state ถูกเก็บไว้ใน Store โดยนำ store ทำงานร่วมกับ Component
//เปลี่ยน State เป็น Props
const mapStateToProps = (state) => {
  return {
    user: state.user,
    emp: state.emp,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "setName",
        payload: name,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
