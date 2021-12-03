
// const Item = (props) => {
// const {title, amount} = props

//Destructuring
const Item = ({title, amount}) => {
  //output to display html
  return (
  <li>{title}<span>{amount}</span> </li>
  )
}

export default Item;