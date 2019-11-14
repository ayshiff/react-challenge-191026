import React, { useEffect, useState } from "react";
import {
  AGetAllPromos,
  Promo,
  PromoActions,
  AAddPromo
} from "../../actions/promo.action";
import { connect } from "react-redux";
import "./create_promo.component.scss";
import { Checkbox, Input, Radio, Button, Icon } from "antd";

// Components
import Menu from "../dashboard/menu.component";
import { AGetAllTeachers, Teacher } from "../../actions/teacher.action";

interface IProps {
  GetAllPromos: any;
  GetAllTeachers: any;
  AddPromo: any;
  AAdd: any;
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
  const [teacher, setTeacher] = useState([""]);

  useEffect(() => {
    props.GetAllPromos();
    props.GetAllTeachers();
  }, []);

  const onSubmit = () => {
    const data = {
      year: parseInt(year),
      cursus,
      teachers: [teacher],
      subjects: competence.slice(1).map(el => {
        return { subject: el };
      })
    };
    props.AddPromo(data);
  };
  return (
    <div className="container_home">
      <Menu {...props} />
      <div className="container_wrapper">
        <h1 className="container_title">Créer une promotion</h1>
        <div className="promo_container_list">
          <div>
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
          </div>
          <div>
            <span>COMPÉTENCES</span>
            <div className="promo_cursus">
              <Checkbox
                onChange={e =>
                  e.target.checked &&
                  setCompetence(prevArray => [...prevArray, "UX"])
                }
              >
                UX
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
                Développement Frontend
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
                Développement Backend
              </Checkbox>
            </div>
          </div>
          <div>
            <div>
              <span>ANNÉE DIPLOMANTE</span>
              <Input
                className="year"
                onChange={e => setYear(e.target.value)}
                placeholder="2020"
              />
            </div>
          </div>
          <Radio.Group
            onChange={e => setTeacher(e.target.value)}
            value={teacher}
          >
            {props.teachers.map((teacher: Teacher) => (
              <Radio
                onChange={e =>
                  setTeacher(prevArray => [...prevArray, e.target.value])
                }
                value={`/api/teachers/${teacher.id}`}
                key={teacher.id}
              >
                {teacher.firstname} {teacher.lastname}
              </Radio>
            ))}
          </Radio.Group>
          <Button>
            <Icon type="upload" /> Choisir le document
          </Button>
          <Button onClick={onSubmit} className="submit-button" type="primary">
            Créer
          </Button>
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
    GetAllTeachers: () => dispatch(AGetAllTeachers()),
    AddPromo: (payload: any) => dispatch(AAddPromo(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
