import React, { useEffect, useState } from "react";
import {
  AGetAllStudents,
  Student,
  AAddStudent
} from "../../actions/student.action";
import { Teacher } from "../../actions/teacher.action";
import { connect } from "react-redux";
import { Table, Divider, Button, Modal, Input, Radio } from "antd";
import "./dashboard.component.scss";
import "../reset.scss";
import { useParams } from "react-router-dom";
import { Spin } from "antd";

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
  promos: any;
  onAddStudent: any;
}

interface IState {}

const Home = (props: IProps) => {
  const { students, isFetchingStudents } = props;
  const [studentToDisplay, setStudentToDisplay] = useState();
  const [visibleModal, setvisibleModal] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [noteUx, setNoteUX] = useState("");
  const [noteUI, setNoteUI] = useState("");
  const [noteFront, setNoteFront] = useState("");
  const [noteBack, setNoteBack] = useState("");
  const [noteProjet, setNoteProjet] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [teacher, setTeacher] = useState([""]);

  const { id } = useParams();

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
    if (props.promos && props.promos.students) {
      const students = props.promos.students
        .concat(props.students)
        .map((student: Student) => {
          const notes = student.notes.map((note: any) => {
            return {
              [note.subject.subject]: note.note
            };
          });
          const data = {
            key: student.id,
            fullname: `${student.firstname} ${student.lastname}`
          };
          for (const dd of notes) {
            // @ts-ignore
            data[Object.keys(dd)] = Object.values(dd);
          }
          return data;
        });
      setStudentToDisplay(students || []);
      setLoading(false);
    }
  }, [props.promos, props.students]);

  useEffect(() => {
    props.onFetchStudents(id);
  }, []);

  const onAddStudent = () => {
    const data = {
      firstname: firstName,
      lastname: lastName,
      user: {
        mail: email
      },
      promo: `api/promos/${id}`,
      notes: [
        {
          note: noteUx,
          teacher: "/api/teachers/1",
          subject: "/api/subjects/9"
        },
        {
          note: noteUI,
          teacher: "/api/teachers/1",
          subject: "/api/subjects/7"
        },
        {
          note: noteFront,
          teacher: "/api/teachers/1",
          subject: "/api/subjects/6"
        },
        {
          note: noteProjet,
          teacher: "/api/teachers/1",
          subject: "/api/subjects/8"
        },
        {
          note: noteBack,
          teacher: "/api/teachers/1",
          subject: "/api/subjects/5"
        }
      ]
    };
    props.onAddStudent(data);
    setvisibleModal(false);
  };
  return (
    <div className="container_home">
      <Menu {...props} />
      <div className="header">
        <div className="header-container">
          <h1>
            Promotion{" "}
            {props.promos && props.promos.cursus && props.promos.cursus.cursus}
          </h1>
          <input type="text" />
          <input type="text" />
          <Button
            className="header-button"
            type="primary"
            onClick={() => setvisibleModal(true)}
          >
            + Ajouter un élève
          </Button>
          <Modal
            title="Ajouter un élève"
            visible={visibleModal}
            onOk={() => onAddStudent()}
            onCancel={() => setvisibleModal(false)}
          >
            <Input
              onChange={e => setFirstName(e.target.value)}
              className="add-student-input"
              placeholder="Firstname"
            />
            <Input
              onChange={e => setLastName(e.target.value)}
              className="add-student-input"
              placeholder="Lastname"
            />
            <Input
              onChange={e => setEmail(e.target.value)}
              className="add-student-input"
              placeholder="Email"
            />
            <Input
              onChange={e => setNoteUX(e.target.value)}
              className="add-student-input"
              placeholder="Note en UX"
            />
            <Input
              onChange={e => setNoteBack(e.target.value)}
              className="add-student-input"
              placeholder="Note en Back"
            />
            <Input
              onChange={e => setNoteUI(e.target.value)}
              className="add-student-input"
              placeholder="Note en UI"
            />
            <Input
              onChange={e => setNoteFront(e.target.value)}
              className="add-student-input"
              placeholder="Note en Front-End"
            />
            <Input
              onChange={e => setNoteProjet(e.target.value)}
              className="add-student-input"
              placeholder="Note en Gestion de projet"
            />
          </Modal>
        </div>
        {isLoading && <Spin className="spinner" />}
        {!isLoading && (
          <div className="student-list-container">
            <Table
              className="student-list"
              dataSource={studentToDisplay}
              columns={columns}
              pagination={false}
              scroll={{ y: 840 }}
            />
          </div>
        )}
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
    onFetchStudents: (id: any) => dispatch(AGetPromos({ id })),
    onAddStudent: (payload: Student) => dispatch(AAddStudent(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
