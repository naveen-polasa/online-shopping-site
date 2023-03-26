import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem, toggleQuantity } from "../features/cartSlice";
import { formatPrice } from "../utils/constants";
import AmountButtons from "./AmountButtons";

const CartItem = ({ id, image, title, price, quantity: amount }) => {
  const dispatch = useDispatch();
  const increase = () => dispatch(toggleQuantity({ id, type: "inc" }));
  const decrease = () => dispatch(toggleQuantity({ id, type: "dec" }));
  return (
    <div className="flex items-center justify-between md:justify-around px-5 py-2 my-3 mx-9 border rounded-xl">
      <div className="flex gap-x-4 m-3 items-center w-64 ">
        <img src={image} alt={title} className="rounded-xl w-16 h-16" />
        <div>
          <h5 className="capitalize font-semibold">{title}</h5>
          <h5 className="font-semibold"> {formatPrice(price)}</h5>
        </div>
      </div>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="font-semibold hidden md:flex">
        {formatPrice(price * amount)}
      </h5>
      <button
        className="text-red-600 hidden sm:flex"
        onClick={() => dispatch(removeItem(id))}
      >
        <FaTrash />
      </button>
    </div>
  );
};
export default CartItem;
