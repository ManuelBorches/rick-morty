import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "@src/features/characters/characterSlice";

const ButtonFilter = ({ items, filteredItems, setFilteredItems }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.characters.page);

  return items.map((item) => {
    const handleFilter = () => {
      page !== 1 && dispatch(setPage(1));
      if (filteredItems.includes(item))
        return dispatch(
          setFilteredItems(
            filteredItems.filter((filteredItem) => filteredItem !== item)
          )
        );
      return dispatch(setFilteredItems([...filteredItems, item]));
    };
    return (
      <button
        key={item}
        className={`btn btn-${
          (filteredItems.includes(item) && "primary") || "secondary"
        } m-1`}
        onClick={handleFilter}
      >
        {item}
      </button>
    );
  });
};

export default ButtonFilter;
