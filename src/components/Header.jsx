import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Link } from "react-router-dom";
import { brainwave } from "../assets";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (e) => {
    if (!openNavigation) return;
    e.preventDefault();
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link to="/" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </Link>

        <nav
  className={`${
    openNavigation ? "flex" : "hidden"
  } fixed p-[1.8rem] top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
>
  {/* Updated Navigation Links */}
  <div
    className={`relative z-2 flex flex-col items-center justify-center m-auto space-y-4 lg:flex-row lg:space-y-0 lg:space-x-14`}
  >
    <Link
      to="/features"
      className="button  text-n-1/50 transition-colors hover:text-n-1 sm:button mr-4 "
    >
      FEATURES
    </Link>
    <Link
      to="/pricing"
      className="button mr-8  text-n-1/50 transition-colors hover:text-n-1"
    >
      PRICING
    </Link>
    <Link
      to="/how-to-use"
      className="button mr-8  text-n-1/50 transition-colors hover:text-n-1"
    >
      HOW TO USE
    </Link>
    <Link
      to="/roadmap"
      className="button mr-8  text-n-1/50 transition-colors hover:text-n-1"
    >
      ROADMAP
    </Link>
  </div>

  <HamburgerMenu />
</nav>


        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
