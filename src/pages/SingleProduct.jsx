import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import AddToCart from "../components/AddToCart";
import Loading from "../components/Loading";
import { getSingleProduct } from "../features/productsSlice";
import { formatPrice } from "../utils/constants";

const SingleProduct = () => {
  const { singleProduct, isLoading, isError } = useSelector(
    (store) => store.products
  );
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <>
        <Error />
        <div className="text-center pb-12">
          <button
            className="py-2 px-4 my-2 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl text-center"
            onClick={() => navigate("/")}
          >
            Back To Home
          </button>
        </div>
      </>
    );
  }

  const {
    category,
    description,
    id: productId,
    image,
    price,
    rating,
    title,
  } = singleProduct;
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <Link to="/products">
          <button className="py-2 px-4 mx-5 mt-4 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-xl">
            Products
          </button>
        </Link>
        <div className="px-5 py-4 lg:flex">
          <section className="md:w-[66%] md:mx-auto lg:mx-0">
            <img
              src={image}
              alt={title}
              className="w-[94%] sm:w-[80%] mx-auto md:w-[30rem] md:h-[25rem] h-96 ms:mx-3  md:mx-0 my-3 rounded-2xl"
            />
          </section>
          <div className="md:w-[60%] md:mx-auto">
            <h2 className="text-xl capitalize font-semibold py-2">{title}</h2>
            <div>
              <p>
                <span className="font-semibold text-slate-800 w-16 inline-block">
                  Rating :
                </span>
                {rating?.rate} / 5.0 ( {rating?.count} customer reviews)
              </p>
            </div>
            <h5 className="text-red-700 font-semibold py-2">
              {formatPrice(price)}
            </h5>
            <p className="py-2 lg:opacity-75">{description}</p>
            <div className="flex flex-col gap-y-3 py-2 ">
              <p>
                <span className="font-semibold text-slate-800 w-32 inline-block">
                  Available :
                </span>
                In Stock
              </p>
              <p>
                <span className="font-semibold text-slate-800 w-32 inline-block">
                  Product Id :
                </span>
                {productId}
              </p>
              <p>
                <span className="font-semibold text-slate-800 w-32 inline-block">
                  Category :
                </span>
                {category}
              </p>
            </div>
            <hr />
            <AddToCart product={singleProduct} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
