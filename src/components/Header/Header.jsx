import React from "react";
import { useSelector } from "react-redux";
import UserNavLogOut from "./UserNavLogOut";
import UserNavLogin from "./UserNavLogin";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { infoUser } = useSelector((state) => state.userReducer);

  const renderUserNav = () => {
    if (infoUser) {
      //if logged in => Name & logout button
      return <UserNavLogin />;
    } else {
      // If not logged in => login/register button
      return <UserNavLogOut />;
    }
  };

  return (
    <div className="bg-gray-500 py-3 sticky top-0 z-40">
      <div className="container mx-auto px-4 lg:px-0 flex justify-between items-center">
        <NavLink to={"/"} className="text-white font-medium text-2xl flex items-center">
          <span className="font-bold">Movie</span>
          
            <img src="https://cdn.pixabay.com/photo/2017/01/31/23/34/vintage-2028217_640.png" alt="" className="h-8 w-14 inline"/> 
          
        </NavLink>
        <div className="text-white">{renderUserNav()}</div>
      </div>
    </div>
  );
};

export default Header;
