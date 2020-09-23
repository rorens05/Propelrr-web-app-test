import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Page404 from '../components/errors/page_404';
import Reports from '../pages/reports';
import TaskTracker from '../pages/task_tracker';

export class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/404' component={Page404} />
					<Route path='/login' exact component={Login} />
					<Route path='/dashboard' exact component={Dashboard} />
					<Route path='/reports' exact component={Reports} />
					<Route path='/task_tracker' exact component={TaskTracker} />
					<Redirect from='/' exact to='/dashboard' />
					<Redirect to='/404' />
				</Switch>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
