import React from "react";
import "./App.css";
import Transaction from "./components/Transaction";

const Title = () => <h1>โปรแกรมบัญชี รายรับ - รายจ่าย</h1>;

function App() {
  return (
    <>
      <Title />
      <Transaction />
    </>
  );
}

export default App;
