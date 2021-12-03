import Item from "./Item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid';

const Transaction = () => {
  const data=[
    {title:"เงินเดือน", amount:50000},
    {title:"น้ำมัน", amount:3000},
    {title:"เช่าบ้าน", amount:4000},
    {title:"ประกัน", amount:600},
    {title:"อื่นๆ", amount:300},
  ]

      //map item
      //ถ้าชื่อ Props เหมือนกัน ย่อรูปได้
  return (
    <ul className="item-list">
      {
            data.map((element)=>{
                return <Item key={uuidv4()}  {...element}/>
            })
      }
    </ul>
  );
};

export default Transaction;