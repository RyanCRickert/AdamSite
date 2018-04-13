import React from "react";
import { Router, Route, Switch} from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import UIPage from "../components/UIPage";
import TwoDPage from "../components/TwoDPage";
import ThreeDPage from "../components/ThreeDPage";
import MePage from "../components/MePage";
import InspirationPage from "../components/InspirationPage";
import NotFoundPage from "../components/NotFoundPage";

export const history = createHistory();

export default class AppRouter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bg: 1
		}
	}

	componentWillMount() {
		let local = localStorage.getItem("bg");

		if(local) {
			this.setState(() => ({bg : local}));
		} else {
			this.setState(() => ({bg : 1}));
		}
	};

	changeSeason = () => {
			let current = this.state.bg;

			if (current >= 4){
				current = 1;
			} else {
				current++;
			}

			this.setState(() => ({bg : current}));
			localStorage.setItem("bg", current);
	};

	render() {
		return (
			<Router history={history}>
			<div className={`gradient${this.state.bg}`}>
					<Switch>
						<Route path="/" component={HomePage} exact/>
						<Route path="/ui" component={UIPage} />
						<Route path="/2d" component={TwoDPage} />
						<Route path="/3d" component={ThreeDPage} />
						<Route path="/me" component={MePage} />
						<Route path="/inspiration" component={InspirationPage} />
						<Route component={NotFoundPage} />
					</Switch>
				<div className={`background${this.state.bg}`}></div>
				<div className="diamond" onClick={this.changeSeason}><div className="diamond__shadow-bottom"></div><div className="diamond__shadow-right"></div></div>
				<div className="diamond__shade"></div>
				<div className="cloud01 cloudMove01 "></div>
				<div className="cloud02 cloudMove02 "></div>
				<div className="cloud03 cloudMove03 "></div>
				<div className="cloud04 cloudMove04 "></div>
				<div className="cloud05 cloudMove05 "></div>
				<div className="cloud06 cloudMove06 "></div>
				<div className="cloud07 cloudMove07 "></div>
			</div>
		</Router>
		)
	}
}