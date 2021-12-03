import PropTypes from 'prop-types';

// const Item = (props) => {
// const {title, amount} = props

//Destructuring
const Item = ({title, amount}) => {
  //output to display html
  return (
  <li>{title}<span>{amount}</span> </li>
  )
}

Item.propTypes={
  title:PropTypes.string.isRequired,
  amount:PropTypes.number.isRequired
}

export default Item;