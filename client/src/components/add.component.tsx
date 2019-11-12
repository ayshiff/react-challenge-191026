import React, { useEffect, useState } from "react";
import { AAddStudent } from "../actions/student.action";
import { connect } from "react-redux";
import plus from "../assets/plus.svg";

import "./add.component.scss";

interface IProps {
  onAddStudent: any;
}

interface IState {}

const Add = (props: IProps) => {
  const [studentName, setStudentName] = useState("");
  const [studentUX, setStudentUX] = useState("");
  const [studentUI, setStudentUI] = useState("");
  const [studentFront, setStudentFront] = useState("");
  const [studentBack, setStudentBack] = useState("");
  const [studentProjectManagement, setStudentProjectManagement] = useState("");

  const resetFields = () => {
    setStudentName("");
    setStudentUX("");
    setStudentUI("");
    setStudentFront("");
    setStudentBack("");
    setStudentProjectManagement("");
  };

  return (
    <div className="container_add">
      <input
        type="text"
        value={studentName}
        onChange={e => setStudentName(e.target.value)}
      />
      <input
        type="text"
        className="add_grade"
        value={studentUX}
        onChange={e => setStudentUX(e.target.value)}
      />
      <input
        type="text"
        className="add_grade"
        value={studentUI}
        onChange={e => setStudentUI(e.target.value)}
      />
      <input
        type="text"
        className="add_grade"
        value={studentFront}
        onChange={e => setStudentFront(e.target.value)}
      />
      <input
        type="text"
        className="add_grade"
        value={studentBack}
        onChange={e => setStudentBack(e.target.value)}
      />
      <input
        type="text"
        className="add_grade"
        value={studentProjectManagement}
        onChange={e => setStudentProjectManagement(e.target.value)}
      />
      <img
        className="add_student"
        onClick={() => {
          props.onAddStudent(
            studentName,
            studentUX,
            studentUI,
            studentFront,
            studentBack,
            studentProjectManagement
          );
          resetFields();
        }}
        src={plus}
        alt="logo"
        width="38"
        height="38"
      />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddStudent: (
      id: string,
      name: string,
      ux: string,
      ui: string,
      frontend: string,
      backend: string,
      projectManagement: string
    ) =>
      dispatch(
        AAddStudent({
          id,
          name,
          ux,
          ui,
          frontend,
          backend,
          projectManagement
        })
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
