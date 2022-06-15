import React from "react";
import "../YoutubeComp/YoutubeComp.css";

const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src="http://wiki.magicc.org/images/c/ce/MAGICC_logo_small.jpg"
          alt=""
        />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "00.00",
  title: "Title",
  desc: "Description",
};

export default YoutubeComp;
