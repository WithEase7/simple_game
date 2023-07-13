import React from "react";
import { rightArrow } from "../../Utilities/SvgIcons";
import reelBackground from "../../assets/reel_background.jpg";
import jeff from '../../assets/jeff.jpg'
import hot from '../../assets/hot.jpg'
import breakup from '../../assets/breakup.jpg'

const Reels = () => {
  const reelData = [
    {
      img: jeff,
      title: "Jeff Bezos' political superpower revealed"
    },
    {
      img: hot,
      title: "The surprising effect of heatwaves on the air we breathe"
    },
    {
      img: breakup,
      title: "The surprising benefits of breaking up"
    }
  ]
  return (
    <div style={{background: '#433838'}}>
      <div className="p1">
        <div className="df justContBet alignCent">
          <h2 className="txtUpper fs3 clrw">reel</h2>
          <div className="df alignCent pdot5dot7 gapdot5 brdr20 brdrfff">
            <span className="fs1dot2 clrw">Visit Reel</span>
            <span>{rightArrow}</span>
          </div>
        </div>
        <p className="clrw fs1dot1">The most amazing videos from the BBC</p>
      <div className="mt1 reels">
      {reelData.map(item => {
        return (
          <div key={item.title} className="bgw mb1 f1">
            <img src={item.img} alt={item.title} className="w100"/>
            <p className="fwb pdot4 fs1dot3">{item.title}</p>
          </div>
        )
      })}
      </div>
      </div>
    </div>
  );
};

export default Reels;
