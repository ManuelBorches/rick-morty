import React from "react";
import { useDispatch } from "react-redux";

const ButtonFilter = ({ items, filteredItems, setFilteredItems }) => {
  const dispatch = useDispatch();

  return items.map((item) => {
    const handleFilter = () => {
      if (filteredItems.includes(item)) {
        dispatch(
          setFilteredItems(
            filteredItems.filter((filteredItem) => filteredItem !== item)
          )
        );
      } else {
        dispatch(setFilteredItems([...filteredItems, item]));
      }
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
