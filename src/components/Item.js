import './Item.css'

const Item = () => {

const name = "some thing"
const amount = 5000
  //output to display html
  return (
  <li className="item"> {name}<span>{amount}</span> </li>
  )
}

export default Item;