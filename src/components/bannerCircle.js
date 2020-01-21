import React from "react"

const BannerCicle = () => { 
  let arr = [];

  for(let i = 0; i < 300; i++) {
      arr.push(i);
  }

  return (
    <div className="banner-circle">
      {arr.map(item => <div className="banner-circle__part" key={item}></div>)}
    </div>
)};

export default BannerCicle
