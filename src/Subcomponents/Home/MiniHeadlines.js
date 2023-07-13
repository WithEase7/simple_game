import React from "react";

const MiniHeadlines = ({ data }) => {
  return (
    <ul className="listNone df flxWrap gapdot5 justContCent">
      {data.map((item) => {
        return (
          <li className="w49 flxsh0">
            <div className="bgblack por mb1 mt1 imgShadow">
              <img src={item.image} className="w100 opdot6" />
              <div className="poa bt1 lt1 rt1">
                <h2 className="clrw mb1 fs1dot2">{item.title}</h2>
                <div className="df">
                  <div className="leftBorder2"></div>
                  <p className="clrd3 pldot5 txtUpper fsdot9">{item.category}</p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MiniHeadlines;
