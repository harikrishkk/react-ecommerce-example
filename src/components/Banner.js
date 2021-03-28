import React from "react";
import Banner1 from "../assets/images/banner-1.JPG";
import Banner2 from "../assets/images/banner-2.JPG";
import Banner3 from "../assets/images/banner-3.JPG";

const Banner = () => {
  return (
    <main className="w-100 cf helvetica dark-gray bg-white pa3 pa4-m pa4-l mw9 center">
      <div className="fl w-50 pr2 pr3-l mb3 mb4-l">
        <div
          className="cover pv5 pv6-m pv7-l pointer"
          style={{
            background: `black url(${Banner1}) center`,
          }}
        ></div>
      </div>
      <div className="fl w-50 w-25-l pl2 pr2-m ph2-l mb3 mb4-l">
        <div
          className="cover pv5 pv6-m pv7-l pointer"
          style={{
            background: `black url(${Banner2}) center`,
          }}
        ></div>
      </div>
      <div className="fl w-50 w-50 w-25-l pr2 pr0-l pl3-l mb3 mb4-l">
        <div
          className="cover pv5 pv6-m pv7-l pointer"
          style={{
            background: `black url(${Banner3}) center`,
          }}
        ></div>
      </div>
    </main>
  );
};

export default Banner;
