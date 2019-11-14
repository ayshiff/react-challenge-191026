import { combineEpics } from "redux-observable";

import studentEpic from "./student.epic";
import teacherEpic from "./teacher.epic";
import loginEpic from "./login.epic";
import promoEpic from "./promo.epic";
import noteEpic from "./note.epic";

const epics = combineEpics(
  ...studentEpic,
  ...teacherEpic,
  ...loginEpic,
  ...promoEpic,
  ...noteEpic
);

export default epics;
