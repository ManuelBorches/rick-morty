import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "lodash";
import { setNameFilter } from "@src/features/filters/filterSlice";
import { setPage } from "@src/features/characters/characterSlice";

const SearchInput = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const nameFilter = useSelector((state) => state.filters.nameFilter);
  const page = useSelector((state) => state.characters.page);
  const dispatch = useDispatch();

  useEffect(() => setName(nameFilter), [setName, nameFilter]);

  const handleChange = (event) => {
    const { value } = event.target;
    if (!/^[A-Z ]*$/i.test(value)) return !error && setError(true);
    setName(value);
    error && setError(false);
    page !== 1 && dispatch(setPage(1));
    const debouncedNameQuery = debounce(
      () => dispatch(setNameFilter(value)),
      500
    );
    return debouncedNameQuery();
  };

  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="filter by name"
        onChange={handleChange}
        value={name}
      />
      {error && <p className="text-danger mt-2">You can only type letters!</p>}
    </>
  );
};

export default SearchInput;
