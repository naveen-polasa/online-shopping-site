import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import Product from "../components/Product";
import Search from "../components/Search";
import { getProducts } from "../features/productsSlice";
const Products = () => {
  const { filteredProducts, isLoading, isError } = useSelector(
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
    <section className="max-w-7xl mx-auto min-h-[calc(100vh-8rem)] ">
      <div>
        <Search />
      </div>
      {!filteredProducts.length && <NotFound />}
      <div className=" max-w-6xl mx-auto flex flex-wrap justify-center md:justify-around lg:justify-around  gap-x-8 gap-y-5 mt-8">
        {filteredProducts.map((product) => {
          return <Product key={product.id} {...product}></Product>;
        })}
      </div>
    </section>
  );
};
export default Products;
