import { createStore, applyMiddleware, compose, Action } from "redux";
import { createEpicMiddleware } from "redux-observable";

import rootReducer from "../reducers/index";
import rootEpic from "../epics/index";

import { Student } from "../actions/student.action";
import { Teacher } from "../actions/teacher.action";
import { Promo } from "../actions/promo.action";
import { Note } from "../actions/note.action";

const epicMiddleware = createEpicMiddleware();

const middlewares = [epicMiddleware];

interface IinitialState {
  student: { list: Student[]; fetching: boolean };
  teacher: { list: Teacher[]; fetching: boolean };
  promo: { list: Promo[]; fetching: boolean; overview: [] };
  note: { list: Note[]; fetching: boolean };
  auth: boolean;
}

const initialState: IinitialState = {
  student: { list: [], fetching: false },
  teacher: { list: [], fetching: false },
  promo: { list: [], fetching: false, overview: [] },
  note: { list: [], fetching: false },
  auth: false
};

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

export const Store = createStore(rootReducer, initialState, enhancers);

epicMiddleware.run(rootEpic);
