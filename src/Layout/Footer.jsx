import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        {" "}
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a
          href="https://github.com/reza-talebii"
          target="_blank"
          rel="noreferrer"
        >
          Reza talebi
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
