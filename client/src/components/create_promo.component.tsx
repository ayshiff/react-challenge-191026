import React, { useEffect, useState } from "react";
import { AGetAllPromos, Promo, PromoActions } from "../actions/promo.action";
import { connect } from "react-redux";
import "./create_promo.component.scss";
import { Checkbox, Input, Radio, Button, Icon } from "antd";

// Components
import Menu from "./dashboard/menu.component";
import { AGetAllTeachers, Teacher } from "../actions/teacher.action";

interface IProps {
  GetAllPromos: any;
  GetAllTeachers: any;
  promos: Promo[];
  teachers: Teacher[];
  history: {
    push: any;
  };
}

interface IState {}

const Overview = (props: IProps) => {
  const [cursus, setCursus] = useState("");
  const [competence, setCompetence] = useState([""]);
  const [year, setYear] = useState("");

  useEffect(() => {
    props.GetAllPromos();
    props.GetAllTeachers();
  }, []);

  const onSubmit = () => {
    console.log({ cursus, competence, year });
  };
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
              <Radio value={"/api/cursuses/1"}>Développeur Web</Radio>
              <Radio value={"/api/cursuses/2"}>Webmarketing & UX</Radio>
              <Radio value={"/api/cursuses/3"}>3D & Jeux Vidéos</Radio>
            </Radio.Group>
          </div>
          <span>COMPÉTENCES</span>
          <div className="promo_cursus">
            <Checkbox
              onChange={e =>
                e.target.checked &&
                setCompetence(prevArray => [...prevArray, "Développeur Web"])
              }
            >
              Développeur Web
            </Checkbox>
            <Checkbox
              onChange={e =>
                e.target.checked &&
                setCompetence(prevArray => [
                  ...prevArray,
                  "Développement Frontend"
                ])
              }
            >
              Webmarketing & UX
            </Checkbox>
            <Checkbox
              onChange={e =>
                e.target.checked &&
                setCompetence(prevArray => [
                  ...prevArray,
                  "Développement Backend"
                ])
              }
            >
              3D & Jeux Vidéos
            </Checkbox>
            <span>ANNÉE DIPLOMANTE</span>
            <Input onChange={e => setYear(e.target.value)} placeholder="2020" />
            <Radio.Group
              onChange={e => setCursus(e.target.value)}
              value={cursus}
            >
              {props.teachers.map((teacher: Teacher) => (
                <Radio value={`/api/teacher/${teacher.id}`}>
                  {teacher.firstname} {teacher.lastname}
                </Radio>
              ))}
            </Radio.Group>
            <Button>
              <Icon type="upload" /> Choisir le document
            </Button>
            <Button onClick={onSubmit} className="cursus_submit" type="primary">
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
    promos: state.promo.list,
    teachers: state.teacher.list
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    GetAllPromos: () => dispatch(AGetAllPromos()),
    GetAllTeachers: () => dispatch(AGetAllTeachers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
