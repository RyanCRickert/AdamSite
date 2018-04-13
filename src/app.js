import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "bootstrap/scss/bootstrap.scss";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import HomePage from "./components/HomePage";

const store = configureStore();
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));