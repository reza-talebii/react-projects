import React from "react";
import { Link } from "react-router-dom";
import classes from "./Video.module.css";

import spaceVideo from "../../asset/space.mp4";

const Video = () => {
  return (
    <div className={classes.hero}>
      <video autoPlay loop muted className={classes.video}>
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className={classes.content}>
        <h1>Galaxy. Travel.</h1>
        <p>World's first civilian space travel.</p>
        <div>
          <Link to="/training" className="btn">
            Training
          </Link>
          <Link to="/contact" className="btn btn-light">
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
