import { useState } from "react";
import "./FormComponent.css";

const FormComponent = () => {
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
      title,
      amount: Number(amount),
    };
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
