import React from 'react';
import { toast } from 'react-toastify';
import Dashboard from './pages/dashboard';

function App() {
	toast.success('testing');
	return (
		<div className='App'>
			<Dashboard />
		</div>
	);
}

export default App;
