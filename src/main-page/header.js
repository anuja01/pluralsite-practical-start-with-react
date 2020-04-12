import React from "react";
import GloboLogo from "./GloboLogo.png";
import './index.css'

const Header = (props) => {
  return (
    <header className="row">
      <div className="col-md-5">
        <img src={GloboLogo} alt="logo" className='logo' />
      </div>
      <div className="col-md-7 mt-5 subtitle">{props.subtitle}</div>
    </header>
  );
};

export default Header;
