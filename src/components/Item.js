import PropTypes from "prop-types";
import "./Item.css";
// const Item = (props) => {
// const {title, amount} = props

//Destructuring
const Item = ({ title, amount }) => {
  const status = amount < 0 ? "expense" : "income";

  //output to display html
  return (
    <li className={status}>
      {title}
      <span>{amount}</span>{" "}
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
