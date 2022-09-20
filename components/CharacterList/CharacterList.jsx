import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCharacters } from "../../src/features/characters/characterSlice";
import Pagination from "./Pagination";
import CharacterCard from "./CharacterCard";
import { fetchAPICharacters } from "../../api/character/fetchAPICharacters";

const CharacterList = () => {
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch();
  const { characters, page } = useSelector((state) => state.characters);
  const { nameFilter, statusFilter, genderFilter } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchAPICharacters(
          page,
          nameFilter,
          statusFilter,
          genderFilter
        );
        dispatch(setCharacters(data.results));
        setTotalPages(data.info.pages);
      } catch {
        dispatch(setCharacters([]));
        setTotalPages(1);
      }
    })();
  }, [dispatch, page, nameFilter, statusFilter, genderFilter]);

  return (
    <div className="container">
      {characters.length ? (
        <div className="row">
          {characters.map((character) => (
            <div
              key={character.id}
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
            >
              <CharacterCard character={character} />
            </div>
          ))}
        </div>
      ) : (
        <p className="d-flex justify-content-center">No characters found</p>
      )}

      <div className="row fixedBottom">
        <div className="col">
          <Pagination totalPages={totalPages} />
          <div className="shadowJSX" />
        </div>
      </div>

      <style jsx>{`
        .shadowJSX {
          height: 50px;
          position: fixed;
          width: 100%;
          bottom: 0;
          left: 0;
          background: linear-gradient(#ffffff10, #ffffff);
          box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
          z-index: -1;
        }

        .fixedBottom {
          position: fixed;
          bottom: -2.5rem;
        }
      `}</style>
    </div>
  );
};

export default CharacterList;
