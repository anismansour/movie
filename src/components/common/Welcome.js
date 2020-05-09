import React, { Component } from "react";
import "../style/style.css";
import LogoReact from "../style/react.png";
import LogoJs from "../style/javascript.png";
import LogoCss from "../style/css.png";
import LogoBootstrap from "../style/bootstrap.png";

export class Welcome extends Component {
  render() {
    return (
      <body>
        <header className="header">
          <div className="logo-box">
            <img src={LogoReact} alt="logo img" className="logo1" />
            <img src={LogoJs} alt="logo img" className="logo2" />
            <img src={LogoCss} alt="logo img" className="logo3" />
            <img src={LogoBootstrap} alt="logo img" className="logo4" />
          </div>
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">Quarantine Project</span>
              <span className="heading-primary-sub">
                Front-End / JS / React / CSS / Bootstrap
              </span>
            </h1>
            <a href="/movies" className="btn1 btn1-white btn-animated">
              discover
            </a>
          </div>
        </header>
      </body>
    );
  }
}

export default Welcome;
