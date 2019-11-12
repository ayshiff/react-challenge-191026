import { combineEpics } from "redux-observable";

import studentEpic from "./student.epic";
import teacherEpic from "./teacher.epic";
import loginEpic from "./login.epic";
import promoEpic from "./promo.epic";
import groupeEpic from "./group.epic";

const epics = combineEpics(
  ...studentEpic,
  ...teacherEpic,
  ...loginEpic,
  ...promoEpic,
  ...groupeEpic
);

export default epics;
