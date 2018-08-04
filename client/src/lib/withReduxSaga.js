import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import nextReduxWrapper from "next-redux-wrapper";
import nextReduxSaga from "next-redux-saga";

import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  store.runSagaTask = () => (store.sagaTask = sagaMiddleware.run(rootSaga));
  store.runSagaTask();
  return store;
}

export default function(BaseComponent) {
  return nextReduxWrapper(configureStore)(
    nextReduxSaga({ async: true })(BaseComponent)
  );
}
