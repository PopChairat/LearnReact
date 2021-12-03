import "./FormComponent.css";

const FormComponent = () => {
  const inputTitle = (e) => {};
  const inputAmount = (e) => {};
  const saveItem = (e) => {
    //don't clear value (จะไม่ refresh หน้า)
    e.preventDefault();
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
          />
        </div>
        <div className="form-control">
          <label>จำนวนเงิน</label>
          <input
            type="number"
            placeholder="(+ รายรับ, - รายจ่าย) บาท"
            onChange={inputAmount}
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
