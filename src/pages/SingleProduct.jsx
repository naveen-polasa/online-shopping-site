import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { getSingleProduct } from "../features/productsSlice";

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
  console.log(singleProduct)

  return <div></div>;
};
export default SingleProduct;
