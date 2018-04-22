import "./vendor";
import "./vendor.scss";
import App from "@components/app";
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.scss";

ReactDOM.render(<App/>, document.getElementById("root"));
registerServiceWorker();
