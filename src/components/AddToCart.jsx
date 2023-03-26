import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  return (
    <section>
      <div className="flex gap-x-5">
        <div className="py-3 flex flex-col gap-2">
          <div className="flex gap-x-4">
            <button
              type="button"
              onClick={() => {
                amount === 1 ? setAmount(1) : setAmount(amount - 1);
              }}
            >
              <FaMinus />
            </button>
            <h2 className="text-2xl font-bold">{amount}</h2>
            <button type="button" onClick={() => setAmount(amount + 1)}>
              <FaPlus />
            </button>
          </div>
          <Link to="/cart">
            <button
              type="submit"
              className="py-1.5 px-4 my-2 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-xl"
              onClick={() =>
                dispatch(addToCart({ ...product, quantity: amount }))
              }
            >
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AddToCart;
