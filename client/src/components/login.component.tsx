import React, { useEffect } from "react";
import { AGetStudents, Student } from "../actions/student.action";
import { Teacher } from "../actions/teacher.action";
import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";

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

  useEffect(() => {
    props.onFetchStudents();
  }, []);

  return <div></div>;
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
    onFetchStudents: () => dispatch(AGetStudents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
