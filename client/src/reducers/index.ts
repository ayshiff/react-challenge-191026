import {combineReducers} from "redux";
import studentReducer from "./student.reducer";
import teacherReducer from "./teacher.reducer";

export default combineReducers <any>({
    student: studentReducer,
    teacher: teacherReducer
})