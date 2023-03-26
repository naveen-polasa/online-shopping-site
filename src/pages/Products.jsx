import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import Product from "../components/Product";
import Search from "../components/Search";
import { getProducts } from "../features/productsSlice";
import { paginate } from "../utils/constants";
const Products = () => {
  const { filteredProducts, isLoading, isError } = useSelector(
    (store) => store.products
  );
  const dispatch = useDispatch();
  const [currPage, setPage] = useState(0);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }
  const paginatedProducts = paginate(filteredProducts);
  return (
    <section className="max-w-7xl mx-auto min-h-[calc(100vh-8rem)] ">
      <div>
        <Search />
      </div>
      {!filteredProducts.length && <NotFound />}
      <div className=" max-w-6xl mx-auto flex flex-wrap justify-center md:justify-around lg:justify-around  gap-x-8 gap-y-5 mt-8">
        {paginatedProducts?.[currPage]?.map((product) => {
          return <Product key={product.id} {...product}></Product>;
        })}
      </div>
      <div className="flex justify-center gap-x-3">
        {paginatedProducts?.map((arr, index) => {
          return (
            <button
              key={index}
              className="py-2 px-4 my-2 text-lg border border-orange-500 hover:scale-105 duration-300 text-white bg-orange-400 rounded-2xl"
              onClick={() => setPage(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
};
export default Products;
