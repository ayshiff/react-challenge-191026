import React, { useEffect, useState } from "react";
import { AGetAllStudents, Student } from "../actions/student.action";
import { Teacher } from "../actions/teacher.action";
import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";
import { Table, Divider, Button } from "antd";
import "./dashboard.component.scss";
import "./reset.scss";

// Components
import Menu from "./dashboard/menu.component";
import Add from "./add.component";

interface IProps {
  onFetchStudents: any;
  students: Student[];
  isFetchingStudents: boolean;
  teachers: Teacher[];
  isFetchingteachers: boolean;
}

interface IState {}

const Home = (props: IProps) => {
  const { students, isFetchingStudents } = props;

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
    props.onFetchStudents();
  }, []);

  useState(() => {
    visible: false;
  });

  return (
    <div className="container_home">
      <Menu />
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
            dataSource={data}
            columns={columns}
            pagination={false}
            scroll={{ y: 840 }}
          />
        </div>
      </div>
      <div>
        {isFetchingStudents && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <div className="student-row">
          {!isFetchingStudents &&
            students.map((student: Student, id) => (
              <div key={id} className="student_element"></div>
            ))}
        </div>
      </div>
      {/* <Add /> */}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    students: state.student.list,
    isFetchingStudents: state.student.fetching,
    teachers: state.teacher.list,
    isFetchingteachers: state.teacher.fetching
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetchStudents: () => dispatch(AGetAllStudents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
