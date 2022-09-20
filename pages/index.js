import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMenuVisible } from "../src/features/menu/menuSlice";
import CharacterList from "../components/CharacterList/CharacterList";
import ScrollTopButton from "../components/ScrollTopButton";
import SideBar from "../components/SideBar/SideBar";
import { setSingleCharacter } from "../src/features/characters/characterSlice";

const Home = () => {
  const isMenuVisible = useSelector((state) => state.menu.isMenuVisible);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSingleCharacter({}));
    const updateDimensions = () =>
      (window.innerWidth >= 768 && dispatch(setIsMenuVisible(true))) ||
      dispatch(setIsMenuVisible(false));
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [dispatch]);

  return (
    <div className="container position-relative">
      <div className="row">
        <div className={`col-md-4 menu ${!isMenuVisible ? "d-none" : ""}`}>
          <SideBar />
        </div>

        <div className="col-12 col-md-8">
          <CharacterList />
        </div>
      </div>

      <ScrollTopButton />

      <style jsx>{`
        @media screen and (max-width: 767px) {
          .menu {
            position: fixed;
            width: 80%;
            z-index: 5;
            left: -0.1rem;
            top: 6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
