import React, { useEffect, useState } from "react";
import { AGetAllPromos, Promo, PromoActions } from "../actions/promo.action";
import { connect } from "react-redux";
import "./create_promo.component.scss";
import { Checkbox, Input, Radio, Button, Icon } from "antd";

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
  const [cursus, setCursus] = useState("");
  useEffect(() => {
    props.GetAllPromos();
  }, []);
  return (
    <div className="container_home">
      <Menu />
      <div className="container_wrapper">
        <h1 className="container_title">Créer une promotion</h1>
        <div className="promo_container">
          <span>CURSUS</span>
          <div className="promo_cursus">
            <Radio.Group
              onChange={e => setCursus(e.target.value)}
              value={cursus}
            >
              <Radio value={"Développeur Web"}>Développeur Web</Radio>
              <Radio value={"Webmarketing & UX"}>Webmarketing & UX</Radio>
              <Radio value={"3D & Jeux Vidéos"}>3D & Jeux Vidéos</Radio>
            </Radio.Group>
          </div>
          <span>COMPÉTENCES</span>
          <div className="promo_cursus">
            <Checkbox
              onChange={e => e.target.checked && setCursus("Développeur Web")}
            >
              Développeur Web
            </Checkbox>
            <Checkbox
              onChange={e => e.target.checked && setCursus("Webmarketing & UX")}
            >
              Webmarketing & UX
            </Checkbox>
            <Checkbox
              onChange={e => e.target.checked && setCursus("3D & Jeux Vidéos")}
            >
              3D & Jeux Vidéos
            </Checkbox>
            <span>ANNÉE DIPLOMANTE</span>
            <Input placeholder="2020" />
            <Button>
              <Icon type="upload" /> Choisir le document
            </Button>
            <Button className="cursus_submit" type="primary">
              Créer
            </Button>
          </div>
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
