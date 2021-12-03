
const Item = (props) => {

  //output to display html
  return (
  <li>{props.title}<span>{props.amount}</span> </li>
  )
}

export default Item;