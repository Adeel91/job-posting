import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/reducers";
import rootEpic from "./store/epics";

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
