import React from "react";
import logo from "../../assets/logo.svg";
import add from "../../assets/add.svg";
import list from "../../assets/list.svg";
import "./menu.component.scss";

export default () => (
  <div className="menu">
    <img className="menu_logo" src={logo} alt="logo" width="40" height="40" />
    <div className="menu_container">
      <img className="menu_list" src={list} alt="logo" width="38" height="38" />
      <img className="menu_add" src={add} alt="logo" width="38" height="38" />
    </div>
  </div>
);
