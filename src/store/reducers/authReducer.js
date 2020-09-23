import { CURRENT_USER } from '../types/types';

const INITIAL_STATE = {
	user: null
};

const authReducer = (state = INITIAL_STATE, action) => {
	console.log({ action });
	switch (action.type) {
		case CURRENT_USER:
			return { ...state, user: action.payload.user };
		default:
			return state;
	}
};

export default authReducer;
