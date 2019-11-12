import React, { useEffect, useState } from "react";
import { AGetAllPromos, Promo, PromoActions } from "../actions/promo.action";
import { connect } from "react-redux";
import "./overview.component.scss";

// Components
import Menu from "./dashboard/menu.component";

interface IProps {
  GetAllPromos: any;
  promos: Promo[];
}

interface IState {}

const Overview = (props: IProps) => {
  useEffect(() => {
    props.GetAllPromos();
  }, []);
  const { promos } = props;
  return (
    <div className="container_home">
      <Menu />
      <div>
        <h1>Overview</h1>
        <div className="promo_container">
          {promos.map((promo: Promo) => (
            <div className="promo_card">
              <h1>{promo.name}</h1>
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
