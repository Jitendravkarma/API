import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ContextComp } from "./contextAPI/context.jsx";
import { Provider } from "react-redux";
import store from "./redux/Store.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ContextComp>
          <App />
        </ContextComp>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
