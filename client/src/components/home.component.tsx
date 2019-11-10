import React from "react";
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

class Home extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const { students, isFetchingStudents } = this.props;
    return (
      <div>
        <button onClick={this.props.onFetchStudents}>Fetch students</button>
        {isFetchingStudents && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {!isFetchingStudents &&
          students.map((student: Student, id) => (
            <div key={id}>
              <h1>{student.name}</h1>
              <h1>{student.surname}</h1>
            </div>
          ))}
      </div>
    );
  }
}

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
