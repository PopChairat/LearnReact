import Item from "./Item";
import './Transaction.css'
const Transaction = () => {
  const data=[
    {title:"เงินเดือน", amount:50000},
    {title:"น้ำมัน", amount:3000},
    {title:"เช่าบ้าน", amount:4000},
    {title:"ประกัน", amount:600}
  ]

      //map item
  return (
    <ul className="item-list">
      {
            data.map((element)=>{
                return <Item title={element.title}  amount={element.amount}/>
            })
      }
    </ul>
  );
};

export default Transaction;