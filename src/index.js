// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App/>, document.getElementById('root'));

//Redux Section
import { createStore, combineReducers, applyMiddleware } from "redux";
const initState = {
  salary: 50000,
  valueArr: [],
};
const userReducer = (state = { name: "", age: 0 }, action) => {
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
  combineReducers({ employeeReducer, userReducer }),
  {},
  applyMiddleware(logManagement)
);
//Listen state
store.subscribe(() => {
  console.log("update Store:", store.getState());
});
//Change value in state
store.dispatch({
  type: "ADD",
  payload: 1500,
});
store.dispatch({
  type: "setName",
  payload: "Hello",
});
