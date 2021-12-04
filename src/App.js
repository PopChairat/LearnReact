import React, { useReducer } from "react";
import "./App.css";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import { useState } from "react";

const headerStyle = { color: "red", textAlign: "center", fontSize: "1.5rem" };
const Title = () => <h1 style={headerStyle}>โปรแกรมบัญชี รายรับ - รายจ่าย</h1>;

function App() {
  //Items can change value on runtime (State)
  const [items, setItems] = useState([]);
  //class แม่สร้าง func มารอรับค่า จาก FormComponent
  const onAddNewItem = (newItem) => {
    console.log(newItem);
    setItems((previousDataArr) => {
      return [newItem, ...previousDataArr];
    });
  };

  //============== Reducer ==============//
  const [count, setCount] = useState(0);
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state + action.payload;
      case "REMOVE":
        return state - action.payload;
      case "RESET":
        return 0;
    }
  };
  //dispatch เป็นบอกว่าให้เป็น Action แบบไหน (ADD  or REMOVE or RESET)
  const [result, dispatch] = useReducer(reducer, count);
  //============== End Reducer ==============//
  return (
    <div align="center">
      <h1>{result}</h1>
      <button onClick={() => dispatch({ type: "ADD", payload: 10 })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: "REMOVE", payload: 5 })}>
        Remove
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
    // <div className="container">
    //   <Title />
    //   <FormComponent onAddItem={onAddNewItem} />
    //   <Transaction items={items} />
    // </div>
  );
}

export default App;
