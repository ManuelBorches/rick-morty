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

      <div className="row">
        <div className="col position-fixed bottom-0">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
