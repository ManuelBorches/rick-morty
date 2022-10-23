import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import logo from "../../public/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setIsMenuVisible } from "@src/features/menu/menuSlice";

const NavBar = () => {
  const { pathname } = useRouter();
  const isMenuVisible = useSelector((state) => state.menu.isMenuVisible);
  const dispatch = useDispatch();

  const toggleMenu = () => dispatch(setIsMenuVisible(!isMenuVisible));

  return (
    <nav className="navbar sticky-top navbar-light bg-dark shadow-lg">
      <div className="row container-fluid">
        <div className="col">
          {(pathname !== "/" && (
            <Link href="/">
              <a className="btn btn-secondary">
                <BiArrowBack />
              </a>
            </Link>
          )) || (
            <button
              type="button"
              className="btn btn-secondary d-md-none d-block"
              onClick={toggleMenu}
            >
              {(isMenuVisible && <IoClose />) || <HiOutlineMenuAlt2 />}
            </button>
          )}
        </div>
        <div className="col text-center">
          <Link href="/">
            <a className="navbar-brand">
              <Image
                src={logo}
                alt="rick and morty logo"
                width={250}
                height={90}
                onClick={() => console.log("img clicked")}
              />
            </a>
          </Link>
        </div>
        <div className="col"></div>
      </div>
    </nav>
  );
};

export default NavBar;
