import React from "react";

const Footer = () => {
  const navs = [
    "Home",
    "News",
    "Sport",
    "Reel",
    "Worklife",
    "Travel",
    "Future",
    "Culture",
    "TV",
    "Weather",
    "Sounds",
  ];
  const footerLinks = [
    "Terms of Use",
    "About the BBC",
    "Privacy Policy",
    "Cookies",
    "Accessibility Help",
    "Parental Guidance",
    "Contact the BBC",
    "BBC emails for you",
    "Advertise with us",
    "Do not share or sell my info",
  ];
  return (
    <div className="bg4c mt1">
      <h2 className="fs1dot5 clrw p10">Explore the BBC</h2>
      <div>
        <ul className="por db oh listNone titleBorder pb1">
          {navs.map((item, index) => {
            return (
              <li key={index} className="ml10 fl br1grey ptbdot5 footerNav">
                <a className="clrw">
                  <span className="fsdot9 fwb">{item}</span>
                </a>
              </li>
            );
          })}
        </ul>
         
        <ul className="por db oh listNone">
          {footerLinks.map((item, index) => {
            return (
              <li key={index} className="ml10 fl ptbdot5 footerNav">
                <a className="clrw">
                  <span className="fsdot8">{item}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="mt1 p10 fsdot8 clrw ">
          <span className="fwb">Copyright © 2023 BBC. </span>The BBC is not responsible for the
          content of external sites.{" "}
          <span className="fwb">Read about our approach to external linking</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
