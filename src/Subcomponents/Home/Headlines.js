import React from "react";
import topImg from "../../assets/top.jpg";
import movie from "../../assets/movie.jpg";
import MiniHeadlines from "./MiniHeadlines";
import MiniNews from "./MiniNews";

const Headlines = ({ data, heading }) => {
  return (
    <div className="mtb1">
      <div>
      {!heading && (
        <div className="bgblack por mb1">
          <img src={topImg} className="w100 opdot6" />
          <div className="poa bt1 lt1 rt1">
            <h2 className="clrw mbdot5 fs1dot8">
              US allies troubled by cluster bombs to Ukraine
            </h2>
            <p className="description clrd3 mbdot5 fs1dot1">
              Washington is supplying the weapons to Kyiv, but they are outlawd
              in more than 100 countries.
            </p>
            <div className="df">
              <div className="leftBorder2"></div>
              <p className="clrd3 pldot5">US & CANADA</p>
            </div>
          </div>
        </div>
      )}
      {!heading && <div className="miniHeading">
        <MiniHeadlines data={data}/>
      </div>}
      </div>
      {heading && (
        <div className="df ml5">
          <div className="leftBorder"></div>
          <h2 className="pdl10 clr4a fs1dot5">{heading}</h2>
        </div>
      )}
      {heading === "Editor's Picks" && (
        <div className="mtb2">
          <div className="bgblack por mb1 mt1 imgShadow">
            <img src={movie} className="w100 opdot6" />
            <div className="poa bt1 lt1 rt1">
              <h2 className="clrw mb1 fs1dot5">
                Sixteen of the best films of 2023
              </h2>
              <div className="df">
                <div className="leftBorder2"></div>
                <p className="clrd3 pldot5">CULTURE</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <ul className="listNone miniList">
        {data.map((item) => {
          return (
            <li className="mlr5 ptb10 titleBorder" key={item.title}>
              <h3 className="fdot1s1 mb5">{item.title}</h3>
              <span className="txtUpper brdrLeft pdl10 fsdot7">
                {item.category}
              </span>
            </li>
          );
        })}
      </ul>
      {heading && <div className="miniNews">
        <MiniNews data={data}/>
      </div>}
    </div>
  );
};

export default Headlines;
