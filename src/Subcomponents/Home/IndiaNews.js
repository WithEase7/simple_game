import React from "react";
import topImg from "../../assets/crime.png";
import MiniNews from "./MiniNews";

const IndiaNews = ({data}) => {
  return (
    <div className="mtb2">
      <div className="df ml5">
        <div className="leftBorder"></div>
        <h2 className="plr10 clr4a fs1dot5">India News</h2>
      </div>
      <div className="in1">
      <div className="bgblack por mb1 mt1 imgShadow">
        <img src={topImg} className="w100 opdot6" />
        <div className="poa bt1 lt1 rt1">
          <h2 className="clrw mbdot5 fs1dot5">
            Delhi's earliest crimes revealed by 1800s police records
          </h2>
          <div className="df">
            <div className="leftBorder2"></div>
            <p className="clrd3 pldot5">INDIA</p>
          </div>
        </div>
      </div>
      <div className="mlr5 ptb10 titleBorder">
        <h3 className="fs1dot1 mb5">
          Rahul Gandhi's appeal in defamation case dismissed
        </h3>
        <span className="txtUpper brdrLeft pdl10 fsdot9">India</span>
      </div>
      </div>
      <div className="in2 mt1">
        <MiniNews data={data}/>
      </div>
    </div>
  );
};

export default IndiaNews;
