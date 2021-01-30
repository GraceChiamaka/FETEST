import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import DashboardPage from "../pages/Dashboard";

const Routes = () => {
	const history = useHistory();
	return (
		<BrowserRouter history={history}>
			<Switch>
				<Route path="/" exact key="home" component={DashboardPage} />
				<Route
					path="/divisions"
					exact
					key="dashboard"
					component={DashboardPage}
				/>
				<Route
					path="/projects"
					exact
					key="projects"
					component={DashboardPage}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
