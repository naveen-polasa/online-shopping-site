import { useDispatch, useSelector } from "react-redux";
import { setSearchVal } from "../features/productsSlice";

const Search = () => {
  const { searchVal } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  return (
    <div className="text-center my-4">
      <input
        type="text"
        value={searchVal}
        onChange={(e) => dispatch(setSearchVal(e.target.value))}
        className="w-[80%] md:w-[30rem] h-12 md:h-14 border-2 rounded-xl px-4 text-lg"
        placeholder="Search..."
      />
    </div>
  );
};
export default Search;
