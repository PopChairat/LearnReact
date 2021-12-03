import Item from "./Item";
import './Transaction.css'
const Transaction = () => {
  const data=[
    {id:1 ,title:"เงินเดือน", amount:50000},
    {id:2, title:"น้ำมัน", amount:3000},
    {id:3,title:"เช่าบ้าน", amount:4000},
    {id:4,title:"ประกัน", amount:600},
    {id:5,title:"อื่นๆ", amount:300},
  ]

      //map item
      //ถ้าชื่อ Props เหมือนกัน ย่อรูปได้
  return (
    <ul className="item-list">
      {
            data.map((element)=>{
                return <Item key={element.id} {...element}/>
            })
      }
    </ul>
  );
};

export default Transaction;