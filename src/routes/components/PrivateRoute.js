import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
	render() {
		const { component: Component, user, ...rest } = this.props;
		console.log({ user });
		return (
			<Route {...rest} render={(props) => (user != null ? <Component {...props} /> : <Redirect to='/login' />)} />
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
