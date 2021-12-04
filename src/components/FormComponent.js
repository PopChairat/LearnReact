import { useState, useEffect } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) => {
  console.log("Render component");
  //Title State
  const [title, setTitle] = useState("");
  //Amount State
  const [amount, setAmount] = useState("");
  //Check Enable Button
  const [formValid, setFormValid] = useState(false);

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
  //useEffect
  useEffect(() => {
    const chkData = title.trim().length > 0 && amount !== 0 && amount !== "";
    setFormValid(chkData);
  }, [title, amount]);

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
          <button type="submit" className="btnSubmit" disabled={!formValid}>
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormComponent;
