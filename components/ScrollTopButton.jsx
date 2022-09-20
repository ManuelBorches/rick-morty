import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleIsVisible);
    return () => window.removeEventListener("scroll", toggleIsVisible);
  }, []);

  const toggleIsVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    return scrolled > 600 ? setIsVisible(true) : setIsVisible(false);
  };

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <button
      type="button"
      className={`${
        (isVisible && "position-fixed") || "d-none"
      } btn btn-primary bottom-0 end-0 mb-5 me-4`}
      data-bs-toggle="tooltip"
      title="go to top"
      onClick={scrollToTop}
    >
      <BsArrowUp />
    </button>
  );
};

export default ScrollTopButton;
