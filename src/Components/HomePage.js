import React from "react";
import AdWidget from "../Subcomponents/Home/AdWidget";
import Headlines from "../Subcomponents/Home/Headlines";
import newsData from "../Utilities/NewsData";
import Reels from "../Subcomponents/Home/Reels";
import WeatherWidget from "../Subcomponents/Home/WeatherWidget";
import IndiaNews from "../Subcomponents/Home/IndiaNews";
import BusinessNews from "../Subcomponents/Home/BusinessNews";

const HomePage = () => {
  return (
    <div className="">
      <AdWidget />
      <div className="pt1 plr10">
        <Headlines data={newsData.headlines} heading="" />
        <Headlines data={newsData.news} heading="News" />
        <Headlines data={newsData.sport} heading="Sport" />
        <Headlines data={newsData.weekend_reads} heading="Weeend Reads" />
        <WeatherWidget />
      </div>
      <Reels />
      <div className="pt1 plr10">
        <IndiaNews data={newsData.india_news}/>
        <Headlines data={newsData.editor_picks} heading="Editor's Picks" />
        <BusinessNews />
      </div>
    </div>
  );
};

export default HomePage;
