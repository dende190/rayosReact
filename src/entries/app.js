import React, { Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../pages/home/containers/home-layout'
import NotFound from '../pages/not-found/containers/not-found'
import Menu from '../widgets/components/menu'

import 'bootstrap/dist/css/bootstrap.css'

render(
	<BrowserRouter>
		<Fragment>
			<Menu />
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</Fragment>
	</BrowserRouter>, document.getElementById("app"));