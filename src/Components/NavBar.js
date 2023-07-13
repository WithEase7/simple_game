import React, { useState } from "react";
import NavLink from "../Subcomponents/NavBar/NavLink";
import {
  BBCLogo,
  userIcon,
  crossIcon,
  hamburgerIcon,
  searchIcon,
} from "../Utilities/SvgIcons";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="df justContAround bgblack mh4 plr8">
        <div className="df">
        <span className="w3rem df alignCent justContCent">{userIcon}</span>
        <span className="w3rem"></span>
        </div>
        <div className="flxgrow df alignCent justContCent">{BBCLogo}</div>
        <div className="df ">
          <span
            className="w3rem df alignCent justContCent"
            onClick={() => setShowMenu(!showMenu)}
          >
            {hamburgerIcon}
          </span>
          <span className="w3rem df alignCent justContCent">{searchIcon}</span>
        </div>
      </div>
      {showMenu && (
        <div className="df bgblack pt1 plr10 transAll">
          <ul className="navList w100">
            <NavLink link="/" pageName="Home" />
            <NavLink link="https://www.bbc.com/" pageName="News" flag={true} />
            <NavLink link="https://www.bbc.com/" pageName="Sport" />
            <NavLink link="https://www.bbc.com/" pageName="Reel" flag={true} />
            <NavLink link="https://www.bbc.com/" pageName="Worklife" />
            <NavLink
              link="https://www.bbc.com/"
              pageName="Travel"
              flag={true}
            />
            <NavLink link="https://www.bbc.com/" pageName="Future" />
            <NavLink
              link="https://www.bbc.com/"
              pageName="Culture"
              flag={true}
            />
            <NavLink link="https://www.bbc.com/" pageName="TV" />
            <NavLink
              link="https://www.bbc.com/"
              pageName="Weather"
              flag={true}
            />
            <NavLink link="https://www.bbc.com/" pageName="Sounds" />
          </ul>
          <span className="pt16" onClick={() => setShowMenu(false)}>
            {crossIcon}
          </span>
        </div>
      )}
    </div>
  );
};

export default NavBar;
