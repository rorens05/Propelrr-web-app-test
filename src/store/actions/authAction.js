// Recommended to use redux on integration
import { CURRENT_USER } from '../types/types';

export const setCurrentUser = (user) => (dispatch) =>
	dispatch({
		type: CURRENT_USER,
		payload: {
			user
		}
	});
