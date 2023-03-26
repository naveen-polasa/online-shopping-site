import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Product from "../components/Product";
import ProductsList from "../components/Product";
import { getProducts } from "../features/productsSlice";
const Products = () => {
  const { fetchedProducts, isLoading, isError } = useSelector(
    (store) => store.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <section className="max-w-5xl mx-auto mt-8">
      <div className="flex flex-wrap justify-center md:justify-around lg:justify-around  gap-x-8 gap-y-5">
        {fetchedProducts.map((product) => {
          console.log(product);
          return <Product key={product.id} {...product}></Product>;
        })}
      </div>
    </section>
  );
};
export default Products;
