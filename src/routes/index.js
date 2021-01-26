import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import DashboardPage from "../pages/Dashboard";

const Routes = () => {
	const history = useHistory();
	return (
		<BrowserRouter history={history}>
			<Switch>
				<Route path="/" exact key="dashboard" component={DashboardPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
