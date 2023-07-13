import React from "react";

const BusinessNews = () => {
  const news = [
    "US jobs growth weakest in more than two years",
    "China hits Jack Ma's Ant Group with nearly $1bn fine",
    "Yellen criticises Chinese curbs against US firms",
    "Twitter threatens legal action over Threads app",
    "Strike action could hit holiday flights in Europe",
  ];
  return (
    <div className="brdre9">
      <h3 className="txtUpper bge9 p1 clrw">latest business news</h3>
      {news.map((item, index) => {
        return (
          <div className={"df p2 gap2 por alignCent " + (index % 2 === 0 ? "bgf2" : "")}>
            <div className="bge9 circle pdot4 clrw tc wh2dot5 lh1dot7 poa">
              {index + 1}
            </div>
            <div className="ml4 fwb fs1dot1">{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BusinessNews;
