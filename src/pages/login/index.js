import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

class Login extends Component {
	state = {
		email: '',
		password: '',
		loading: false
	};

	login = (e) => {
		e.preventDefault();
		this.props.history.push('/');
	};

	render() {
		const { loading } = this.state;
		return (
			!this.state.loading && (
				<div className='login-container'>
					<form className='form-signin' onSubmit={this.login}>
						<img className='mb-4 w-50' src='https://propelrr.com/wp-content/uploads/2019/08/logo.svg' alt='' />
						<h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
						<label htmlFor='inputEmail' className='sr-only'>
							Email address
						</label>
						<input
							type='email'
							id='inputEmail'
							className='form-control'
							placeholder='Email address'
							required=''
							autoFocus=''
							name='email'
							onChange={this.onChange}
						/>
						<label htmlFor='inputPassword' className='sr-only'>
							Password
						</label>
						<input
							type='password'
							id='inputPassword'
							className='form-control'
							placeholder='Password'
							required=''
							name='password'
							onChange={this.onChange}
						/>
						<div className='checkbox mb-3'>
							<label>
								<input type='checkbox' value='remember-me' /> Remember me
							</label>
						</div>
						<button className='btn btn-lg btn-primary btn-block' type='submit' disabled={loading}>
							{loading ? 'Signing in...' : 'Sign in'}
						</button>
						<button
							className='btn btn-lg btn-danger mt-3 btn-block'
							onClick={(e) => e.preventDefault()}
							disabled={loading}
						>
							<i class='fa fa-google' /> &nbsp; &nbsp; Login with Google
						</button>
						<p className='mt-3'>
							No account yet? Register <a href='/register'>here</a>.
						</p>
						<p className='mt-5 mb-3 text-muted'>© 2020-2021</p>
					</form>
				</div>
			)
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
