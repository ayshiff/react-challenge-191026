import React from "react";
import logo from "../../assets/logo.svg";
import add from "../../assets/add.svg";
import list from "../../assets/list.svg";
import "./menu.component.scss";

export default (props: any) => (
  <div className="menu">
    <div className="menu_logo_container">
      <img className="menu_logo" src={logo} alt="logo" width="40" height="40" />
      <p>Hetic</p>
    </div>
    <div className="menu_container">
      <div
        onClick={() => props.history.push("/promo")}
        className="menu_list_container"
      >
        <img
          className="menu_list"
          src={list}
          alt="logo"
          width="38"
          height="38"
        />
        <p>Promotions</p>
      </div>
      <div
        onClick={() => props.history.push("/create_promo")}
        className="menu_add_container"
      >
        <img className="menu_add" src={add} alt="logo" width="38" height="38" />
        <p>Projets</p>
      </div>
    </div>
  </div>
);
