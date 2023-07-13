import React from 'react'
import adImg from "../../assets/ad.jpeg";

const AdWidget = () => {
  return (
        <div className="bg238 df justContCent pb8 psticky z1 tp0">
        <div className="w80 df flxCol alignCent">
        <span className="adText clr50 mb5 mt8 df justFlxEnd w100">
          ADVERTISEMENT
        </span>
        <img src={adImg} />
        </div>
      </div>
  )
}

export default AdWidget