import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
const initState = {
  salary: 50000,
  valueArr: [],
};
const userReducer = (state = { name: "Pop", age: 0 }, action) => {
  switch (action.type) {
    case "setName":
      state = {
        name: action.payload,
      };
      break;
    case "setAge":
      state = {
        age: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};
const employeeReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        salary: (state.salary += action.payload),
        valueArr: [...state.valueArr, action.payload],
      };
      break;
    case "SUBTRACT":
      state = {
        salary: (state.salary -= action.payload),
        valueArr: [...state.valueArr, action.payload],
      };
      break;
    default:
      break;
  }
  return state;
};
const logManagement = (store) => (next) => (action) => {
  //เก็บ action ที่เราทำงาน
  console.log("Log action", action);
  next(action);
};
//Store
const store = createStore(
  combineReducers({ emp: employeeReducer, user: userReducer }),
  {},
  applyMiddleware(logManagement)
);
//Listen state
store.subscribe(() => {
  console.log("update Store:", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
