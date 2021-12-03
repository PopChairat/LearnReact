import Item from "./Item";
import './Transaction.css'
const Transaction = () => {
  return (
    <ul className="item-list">
      <Item  title="ค่ารักษา" amount="2000"/>
      <Item  title="เงินเดือน" amount="50000"/>
    </ul>
  );
};

export default Transaction;