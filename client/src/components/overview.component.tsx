import React, { useEffect, useState } from "react";
import { AGetAllPromos, Promo, PromoActions } from "../actions/promo.action";
import { connect } from "react-redux";
import "./overview.component.scss";
import promo_plus from "../assets/promo_plus.svg";

// Components
import Menu from "./dashboard/menu.component";

interface IProps {
  GetAllPromos: any;
  promos: Promo[];
  history: {
    push: any;
  };
}

interface IState {}

const Overview = (props: IProps) => {
  useEffect(() => {
    props.GetAllPromos();
  }, []);
  const {
    promos,
    history: { push }
  } = props;
  return (
    <div className="container_home">
      <Menu />
      <div className="container_wrapper">
        <h1 className="container_title">Overview</h1>
        <div className="promo_container">
          <div className="promo_card" onClick={() => push("/create_promo")}>
            <div className="promo_plus">
              <img src={promo_plus} />
              <span className="promo_title">Créer une promotion</span>
            </div>
          </div>
          {promos.map((promo: Promo) => (
            <div className="promo_card">
              <div className="promo_plus">
                <h2 className="promo_title">{promo.cursus.cursus}</h2>
                <span className="promo_title">{promo.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    promos: state.promo.list
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    GetAllPromos: () => dispatch(AGetAllPromos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
