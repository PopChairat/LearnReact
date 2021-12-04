import React from "react";
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
  return (
    <div className="container">
      <Title />
      <FormComponent onAddItem={onAddNewItem} />
      <Transaction items={items} />
    </div>
  );
}

export default App;
