import * as React from "react";
import { render } from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/boardReducer";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
