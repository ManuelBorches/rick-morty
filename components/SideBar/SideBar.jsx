import { useSelector } from "react-redux";
import {
  setStatusFilter,
  setGenderFilter,
} from "../../src/features/filters/filterSlice";
import SearchBar from "./SearchBar";
import AccordionFilter from "./AccordionFilter";

const SideBar = () => {
  const { statusFilter, genderFilter } = useSelector((state) => state.filters);
  return (
    <div className="bg-light rounded p-3 shadow">
      <SearchBar />

      <AccordionFilter
        title="status"
        items={["alive", "dead", "unknown"]}
        filteredItems={statusFilter}
        setFilteredItems={setStatusFilter}
      />
      <AccordionFilter
        title="gender"
        items={["female", "male", "genderless", "unknown"]}
        filteredItems={genderFilter}
        setFilteredItems={setGenderFilter}
      />
    </div>
  );
};

export default SideBar;
