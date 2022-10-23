import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMenuVisible } from "@src/features/menu/menuSlice";
import { setSingleCharacter } from "@src/features/characters/characterSlice";
import CharacterList from "@components/CharacterList/CharacterList";
import ScrollTopButton from "@components/ScrollTopButton";
import SideBar from "@components/SideBar/SideBar";
import styles from "styles/Home.module.css";

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
    <div className="container position-relative mt-4 mb-5">
      <div className="row">
        <div
          className={`col-md-4 ${styles.menu} ${
            !isMenuVisible ? "d-none" : ""
          }`}
        >
          <SideBar />
        </div>

        <div className="col-12 col-md-8">
          <CharacterList />
        </div>
      </div>

      <ScrollTopButton />
    </div>
  );
};

export default Home;
