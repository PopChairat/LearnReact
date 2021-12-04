import { useState } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) => {
  //Title State
  const [title, setTitle] = useState("");
  //amount State
  const [amount, setAmount] = useState(0);

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };
  const inputAmount = (e) => {
    setAmount(e.target.value);
  };
  const saveItem = (e) => {
    //don't clear value (จะไม่ refresh หน้า)
    e.preventDefault();
    const itemData = {
      //====== Add uuid ====== //
      id: uuidv4(),
      title,
      amount: Number(amount),
    };

    //update data back to app.js
    props.onAddItem(itemData);

    setTitle("");
    setAmount(0);
  };
  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input
            type="text"
            placeholder="ระบุชื่อรายการ"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="form-control">
          <label>จำนวนเงิน</label>
          <input
            type="number"
            placeholder="(+ รายรับ, - รายจ่าย) บาท"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className="btnSubmit">
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormComponent;
