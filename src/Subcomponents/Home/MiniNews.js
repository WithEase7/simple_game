import React from "react";

const MiniNews = ({ data, flag=false }) => {
  return (
    <div className={"df gap1 mt1 mb2 "+(flag?"flxWrap justContCent":"")}>
      {data.map((item, index) => {
        return index < (flag ? 4 : 3) ? (
          <div className={flag ? "w49 flxsh0" : "f1 por mh20 w50"}>
            <img src={item.image} className="w100" />
            <div className="pb1">
            <h3 className="mb1 fs1dot2">{item.title}</h3>
            <p className="mb1 fs1dot1">{item.desc}</p>
            </div>
            <span className="txtUpper brdrLeft pdl10 fs1 truncate cat">
              {item.category}
            </span>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default MiniNews;
