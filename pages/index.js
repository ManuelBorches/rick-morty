import { useSelector } from "react-redux";
import CharacterList from "../components/CharacterList/CharacterList";
import ScrollTopButton from "../components/ScrollTopButton";
import SideBar from "../components/SideBar/SideBar";

const Home = () => {
  const isMenuVisible = useSelector((state) => state.menu.isMenuVisible);
  return (
    <>
      <div className="container position-relative">
        <div className="row">
          {/* <div className="col-4 d-none d-md-block">
            <SideBar />
          </div> */}

          <div
            className={`col-4 ${
              !isMenuVisible ? "d-none" : ""
            } position-sm-absolute`}
          >
            <SideBar />
          </div>

          <div className="col-12 col-md-8">
            <CharacterList />
          </div>
        </div>
        <ScrollTopButton />
      </div>
    </>
  );
};

export default Home;
