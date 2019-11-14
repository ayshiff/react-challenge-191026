import React, { useEffect, useState } from "react";
import { AGetAllStudents, Student } from "../../actions/student.action";
import { Teacher } from "../../actions/teacher.action";
import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";
import { Table, Divider, Button } from "antd";
import "./dashboard.component.scss";
import "../reset.scss";
import { useParams } from "react-router-dom";

// Components
import Menu from "./menu.component";
import Add from "../add.component";
import { AGetPromos, PromoActions, Promo } from "../../actions/promo.action";

interface IProps {
  onFetchStudents: any;
  students: Student[];
  isFetchingStudents: boolean;
  teachers: Teacher[];
  isFetchingteachers: boolean;
  promos: Promo[];
}

interface IState {}

const Home = (props: IProps) => {
  const { students, isFetchingStudents } = props;
  const [studentToDisplay, setStudentToDisplay] = useState();
  const { id } = useParams();

  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      fullname: `John Brown`,
      ux: "A",
      ui: "A",
      frontend: "A",
      backend: "A",
      gestionprojet: "A"
    });
  }

  const columns = [
    {
      title: "Nom Prénom",
      dataIndex: "fullname",
      key: "fullname"
    },
    {
      title: "UX",
      dataIndex: "ux",
      key: "ux"
    },
    {
      title: "UI",
      dataIndex: "ui",
      key: "ui"
    },
    {
      title: "Front-End",
      dataIndex: "frontend",
      key: "frontend"
    },
    {
      title: "Back-End",
      dataIndex: "backend",
      key: "backend"
    },
    {
      title: "Gestion Projet",
      dataIndex: "gestionprojet",
      key: "gestionprojet"
    }
  ];

  useEffect(() => {
    if (props.promos && props.promos.length) {
      const promo = props.promos.filter((el: any) => String(el.id) == id);
      const students =
        promo[0] &&
        promo[0].students.map((student: Student) => {
          const notes = student.notes.map((note: any) => {
            return {
              [note.subject.subject]: note.note
            };
          });
          return {
            ...notes,
            key: student.id,
            fullname: `${student.firstname} ${student.lastname}`
          };
        });
      setStudentToDisplay(students || []);
      console.log(promo);
    }
  }, [props.promos]);

  useEffect(() => {
    props.onFetchStudents(id);
  }, []);

  return (
    <div className="container_home">
      <Menu {...props} />
      <div className="header">
        <div className="header-container">
          <h1>Promotion</h1>
          <input type="text" />
          <input type="text" />
          <Button className="header-button" type="primary">
            + Ajouter un élève{" "}
          </Button>
        </div>
        <div className="student-list-container">
          <Table
            className="student-list"
            dataSource={studentToDisplay}
            columns={columns}
            pagination={false}
            scroll={{ y: 840 }}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    students: state.student.list,
    isFetchingStudents: state.student.fetching,
    promos: state.promo.overview
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetchStudents: (id: any) => dispatch(AGetPromos({ id }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
