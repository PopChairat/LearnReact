import React from "react";
import "./App.css";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";

const headerStyle = { color: "red", textAlign: "center", fontSize: "1.5rem" };
const Title = () => <h1 style={headerStyle}>โปรแกรมบัญชี รายรับ - รายจ่าย</h1>;

function App() {
  return (
    <div className="container">
      <Title />
      <FormComponent />
      <Transaction />
    </div>
  );
}

export default App;
