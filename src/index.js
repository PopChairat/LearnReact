// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App/>, document.getElementById('root'));

//Redux Section
import { createStore } from "redux";
const initState = {
  salary: 50000,
  valueArr: [],
};
const reducer = (state = initState, action) => {
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
//Store
const store = createStore(reducer);
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
  type: "ADD",
  payload: 600,
});
store.dispatch({
  type: "ADD",
  payload: 300,
});
