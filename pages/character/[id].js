import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setSingleCharacter } from "../../src/features/characters/characterSlice";
import { fetchAPICharacter } from "../../api/character/fetchAPICharacter";
import CharacterDetails from "../../components/CharacterDetails/CharacterDetails";
import Episodes from "../../components/CharacterDetails/Episodes";

const CharacterDetailsPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    id &&
      (async () => {
        const character = await fetchAPICharacter(id);
        dispatch(setSingleCharacter(character));
      })();
  }, [dispatch, id]);

  return (
    <>
      <CharacterDetails />
      <Episodes />
    </>
  );
};

export default CharacterDetailsPage;
