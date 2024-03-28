import React from "react";
import LOGO from "./../assets/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black p-4 w-full z-10">
      <img className="w-36" src={LOGO} alt="logo" />
    </div>
  );
};

export default Header;
