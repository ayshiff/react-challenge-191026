import { combineEpics } from "redux-observable";

import studentEpic from "./student.epic";
import teacherEpic from "./teacher.epic";

const epics = combineEpics(...studentEpic, ...teacherEpic);

export default epics;
