// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App/>, document.getElementById('root'));

//Redux Section
import { createStore } from "redux";
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state += action.payload;
      break;
    case "SUBTRACT":
      state -= action.payload;
      break;
    default:
      break;
  }
  return state;
};
//Store
const store = createStore(reducer, 50000);
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
  type: "SUBTRACT",
  payload: 500,
});
