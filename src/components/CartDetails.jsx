import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../features/cartSlice";
import { formatPrice } from "../utils/constants";
import CartItem from "./CartItem";

const CartDetails = () => {
  const { cartList } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <div className="px-5 py-6 max-w-7xl mx-auto">
      <div className="flex justify-between mx-6 px-4">
        <Link to="/products">
          <button className="py-2 px-4 my-2 text-md border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl">
            Continue Shopping
          </button>
        </Link>
        <button
          type="button"
          onClick={() => dispatch(clearCart())}
          className="py-2 px-4 my-2 text-md border border-red-500 hover:scale-105 duration-300 text-white bg-red-400 rounded-2xl"
        >
          Clear Cart
        </button>
      </div>
      {cartList.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <article className="px-5 py-4 my-3 mx-9  border rounded-xl">
        <div className="flex justify-between">
          <h4 className="font-semibold text-2xl">Order Total :</h4>
          <span className="font-mono text-2xl mr-10">
            {formatPrice(
              cartList.reduce((acc, cur) => {
                return (acc += cur.quantity * cur.price);
              }, 0)
            )}
          </span>
        </div>
      </article>
    </div>
  );
};
export default CartDetails;
