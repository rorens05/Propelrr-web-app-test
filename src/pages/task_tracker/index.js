import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../../components/navigation';

class TaskTracker extends Component {
	render() {
		return <Navigation>Task tracker</Navigation>;
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTracker);
