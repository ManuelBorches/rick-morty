import ButtonFilter from "./ButtonFilter";

const AccordionFilter = ({ title, items, filteredItems, setFilteredItems }) => {
  return (
    <div className="accordion my-4" id={`accordion-${title}`}>
      <div className="accordion-item">
        <h2 className="accordion-header" id={title}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${title}`}
            aria-expanded="true"
            aria-controls={`collapse-${title}`}
          >
            {title}
          </button>
        </h2>
        <div
          id={`collapse-${title}`}
          className="accordion-collapse collapse"
          aria-labelledby={title}
          data-bs-parent={`#accordion-${title}`}
        >
          <div className="accordion-body">
            <ButtonFilter
              items={items}
              filteredItems={filteredItems}
              setFilteredItems={setFilteredItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionFilter;
