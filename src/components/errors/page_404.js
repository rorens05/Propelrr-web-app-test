import React, { Component } from 'react';

export class Page404 extends Component {
	state = {
		count: 1,
		intervalId: null
	};

	componentDidMount = () => {
		console.log('mounted');
		let intervalId = setInterval(() => {
			let { count } = this.state;
			console.log('{ counting: count }');
			if (count < 600) {
				count = count + 2;
			}
			this.setState({ count });
		}, 10);
		this.setState({ intervalId });
	};

	componentWillUnmount = () => {
		clearInterval(this.state.intervalId);
	};

	render() {
		const { count } = this.state;
		return (
			<div>
				<h1>{count < 405 ? count : '404 - PAGE NOT FOUND'} </h1>
			</div>
		);
	}
}

export default Page404;
