import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//#Step1: import  necessary (createStore, Reducer , Provider)
import { createStore } from "redux";
//Reducer ตัวดำเนินการของ State
import postReducer from "./reducers/postReducer";
//Provider เป็นตัวส่งข้อมูลจาก store ไปให้ Component ตัวอื่น
import { Provider } from "react-redux";
//=============

//#Step2:  สร้าง store react
const store = createStore(
  postReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //for debug on chrome
);
//============

ReactDOM.render(
  <React.StrictMode>
    //#Step3: Map store to App
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
