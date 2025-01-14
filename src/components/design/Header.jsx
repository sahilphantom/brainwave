import { useEffect } from "react";
import { background } from "../../assets";
import { Link } from "react-router-dom";
export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>
  );
};

export const HamburgerMenu = ({ toggleMenu }) => {
  return (
    <div className="fixed inset-0 z-50 lg:hidden bg-n-8/90 backdrop-blur-md">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      {/* Menu Links */}
      <div className="flex flex-col space-y-7 text-6xl relative z-50 pt-36 justify-center items-center">
        <Link
          className="button text-3xl text-gray-300"
          to="/features"
          onClick={toggleMenu} // Close the menu when clicking a link
        >
          Features
        </Link>
        <Link
          className="button text-3xl text-gray-300"
          to="/pricing"
          onClick={toggleMenu} // Close the menu when clicking a link
        >
          Pricing
        </Link>
        <Link
          className="button text-3xl text-gray-300"
          to="/how-to-use"
          onClick={toggleMenu} // Close the menu when clicking a link
        >
          How To Use
        </Link>
        <Link
          className="button text-3xl text-gray-300"
          to="/roadmap"
          onClick={toggleMenu} // Close the menu when clicking a link
        >
          Roadmap
        </Link>
      </div>

      {/* Optional Decorative Elements */}
      <Rings />
      <SideLines />
      <BackgroundCircles />

      {/* Close Button */}
      <button
        className="absolute top-5 right-5 text-white text-3xl font-bold z-50"
        onClick={toggleMenu} // Properly toggle the menu state
      >
        ✕
      </button>
    </div>)}