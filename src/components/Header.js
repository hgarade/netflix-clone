import React from "react";
import LOGO from "./../assets/Netflix_Logo_PMS.png";
import DP from "./../assets/man.png";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase.config";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { removeUser } from "../store/slices/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="">
      <div className="flex justify-between absolute bg-gradient-to-b from-black p-4 w-full z-10">
        <img className="w-36" src={LOGO} alt="logo" />
        {user && (
          <div className="flex gap-2 h-12 my-3">
            <img className="w-12" src={DP} alt="profile picture" />
            <button
              onClick={handleSignOut}
              className="bg-red-600 text-white font-bold p-2 rounded-lg"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
