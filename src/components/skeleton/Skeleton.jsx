import React from "react";
import "./style.scss";
const Skeleton = () => {
  return (
    <div className="allcontent">
      <div className="content">
        <div className="thumbnail skeleton"></div>
      </div>
      <div className="contentt">
        <div className="profileImg skeleton"></div>
        <div className="textInfo">
          <div className="title skeleton"></div>
          <div className="name skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
