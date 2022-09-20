import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../src/features/characters/characterSlice";

const Pagination = ({ totalPages }) => {
  const [width, setWidth] = useState();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.characters.page);
  const handlePageChange = (data) => dispatch(setPage(data.selected + 1));

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  return (
    <ReactPaginate
      className="pagination"
      pageCount={totalPages && totalPages}
      nextLabel="next"
      previousLabel="prev"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      forcePage={page - 1}
      onPageChange={handlePageChange}
      marginPagesDisplayed={width < 576 ? 2 : 4}
      pageRangeDisplayed={width < 576 ? 1 : 2}
    />
  );
};

export default Pagination;
