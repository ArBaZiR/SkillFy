import ReactDOM from "react-dom/client";
import "./assets/style/reset.css";
import "./assets/style/style.css";
//
import Router from "./Router";
// Redax
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
