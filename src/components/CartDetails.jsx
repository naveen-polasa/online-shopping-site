import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const CartDetails = () => {
  const { cartList } = useSelector((store) => store.cart);
  return (
    <div className="px-5 max-w-7xl mx-auto">
      <div className="flex justify-between mx-6 px-4">
        <Link to="/products">
          <button className="py-2 px-4 my-2 text-md border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl">
            Continue Shopping
          </button>
        </Link>
        <button
          type="button"
          // onClick={clearCart}
          className="py-2 px-4 my-2 text-md border border-red-500 hover:scale-105 duration-300 text-white bg-red-400 rounded-2xl"
        >
          Clear Cart
        </button>
      </div>
      <hr />
      {cartList.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      {/* <CartTotals /> */}
    </div>
  );
};
export default CartDetails;
