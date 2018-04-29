import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "@components";
import registerServiceWorker from "./registerServiceWorker";
import "./vendor.scss";
import "./index.scss";

ReactDOM.render(<App/>, document.getElementById("root"));
registerServiceWorker();
