import React from "react";
import weatherImage from "../../assets/29.gif";

const WeatherWidget = () => {
  const WeatherData = [
    {
      day: "sun",
      high: "30°C",
      low: "26°C",
    },
    {
      day: "mon",
      high: "31°C",
      low: "26°C",
    },
    {
      day: "tue",
      high: "32°C",
      low: "27°C",
    },
  ];
  return (
    <div className="p1">
      <div className="df gap15 mb1 alignCent">
        <p className="txtUpper fwb fs1dot3">mumbai weather</p>
        <span className="txtUpper bgf2 clr8c pdot4">edit</span>
      </div>
      <div className="df gap2">
        {WeatherData.map((item) => {
          return (
            <div className="df" key={item.day}>
              <img src={weatherImage} alt="clouds" />
              <div>
                <p className="txtUpper">{item.day}</p>
                <p>{item.high}</p>
                <p>{item.low}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherWidget;
