import { useSelector, useDispatch } from "react-redux";
import { setNameFilter } from "../../src/features/filters/filterSlice";
import { setPage } from "../../src/features/characters/characterSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.characters.page);
  const handleChange = (event) => {
    dispatch(setNameFilter(event.target.value));
    page !== 1 && dispatch(setPage(1));
  };
  return (
    <input
      className="form-control"
      type="text"
      placeholder="filter by name"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
