import React from "react";
import { render } from "react-dom";

// we also bring in applyMiddleware (for async)
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// we bring in ReduxPromise
import ReduxPromise from "redux-promise";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// bring in rootReducer
import rootReducer from "./reducers";

// pass in ReduxPromise / createStore apply middleware to create our store (with middleware)
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
