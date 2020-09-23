import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Sidebar extends Component {
	state = {
		toggled: false
	};

	onToggled = () => {
		document.querySelector("#wrapper").classList.toggle('toggled');
	};

	render() {
		const { children } = this.props;
		return (
			<div className='d-flex' id='wrapper'>
				<div className='border-right' id='sidebar-wrapper'>
					<div className='sidebar-heading'>ANALYTICS WEB APP </div>
					<div className='list-group list-group-flush'>
						<a href='#' className='list-group-item list-group-item-action bg-light'>
							Dashboard
						</a>
						<a href='#' className='list-group-item list-group-item-action bg-light'>
							Shortcuts
						</a>
						<a href='#' className='list-group-item list-group-item-action bg-light'>
							Overview
						</a>
						<a href='#' className='list-group-item list-group-item-action bg-light'>
							Events
						</a>
						<a href='#' className='list-group-item list-group-item-action bg-light'>
							Profile
						</a>
						<a href='#' className='list-group-item list-group-item-action bg-light'>
							Status
						</a>
					</div>
				</div>

				<div id='page-content-wrapper' className='position-relative'>
					<span className='' id='menu-toggle' onClick={this.onToggled}>
						<i className='fas fa-bars' />
					</span>
					<div className='sidebar-content'>{children}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
