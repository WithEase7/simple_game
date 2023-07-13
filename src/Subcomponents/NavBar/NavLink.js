import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ link, pageName, flag }) => {
  return (
    <li className={"pt16 pb16 pdl10"}>
      <Link to={link} className="navMenu fs16 tl">
        <span>{pageName}</span>
      </Link>
    </li>
  );
};

export default NavLink;
