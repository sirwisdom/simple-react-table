import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
