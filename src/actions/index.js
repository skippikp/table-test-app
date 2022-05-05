import { SET_PERSONS, SET_SEARCH_PARAM } from '../constants/constants';

const setPersons = (persons) => {
	return {
		type: SET_PERSONS,
		payload: persons,
	};
};

const setSearchParam = (param) => {
	return {
		type: SET_SEARCH_PARAM,
		payload: param,
	};
};

export { setPersons, setSearchParam };
