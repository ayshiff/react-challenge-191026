import { combineReducers } from "redux";
import studentReducer from "./student.reducer";
import teacherReducer from "./teacher.reducer";
import loginReducer from "./login.reducer";
import promoReducer from "./promo.reducer";

export default combineReducers<any>({
  student: studentReducer,
  teacher: teacherReducer,
  login: loginReducer,
  promo: promoReducer
});
