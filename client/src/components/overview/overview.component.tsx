import React, { useEffect, useState } from "react";
import { AGetAllPromos, Promo, PromoActions } from "../../actions/promo.action";
import { connect } from "react-redux";
import "./overview.component.scss";
import promo_plus from "../../assets/promo_plus.svg";
import { AUnselectStudent } from "../../actions/student.action";

// Components
import Menu from "../dashboard/menu.component";

interface IProps {
  GetAllPromos: any;
  promos: Promo[];
  unselectStudents: any;
  students: any[];
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
      <Menu {...props} />
      <div className="container_wrapper">
        <h1 className="container_title">Vue générale</h1>
        <div className="promo_container">
          <div className="promo_card" onClick={() => push("/create_promo")}>
            <div className="promo_plus">
              <img src={promo_plus} />
              <span className="promo_title">Créer une promotion</span>
            </div>
          </div>
          {promos.map((promo: Promo) => (
            <div
              onClick={() => props.history.push(`/dashboard/${promo.id}`)}
              className="promo_card"
            >
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
    promos: state.promo.list,
    students: state.student.list
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    GetAllPromos: () => dispatch(AGetAllPromos()),
    unselectStudents: () => dispatch(AUnselectStudent())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
