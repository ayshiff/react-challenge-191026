import { createStore, applyMiddleware, compose, Action } from "redux";
import { createEpicMiddleware } from "redux-observable";

import rootReducer from "../reducers/index";
import rootEpic from "../epics/index";

const epicMiddleware = createEpicMiddleware<Action<any>, Action<any>, any>();

const middlewares = [epicMiddleware];
const initialState = {
  students: [],
  teachers: []
};

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

export const Store = createStore(rootReducer, initialState, enhancers);

epicMiddleware.run(rootEpic);
