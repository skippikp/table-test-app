import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchParam } from '../../actions';
import './SearchInput.css';

const SearchInput = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setSearchParam(value));
	}, [value]);

	return (
		<div className="custom-input">
			<input
				className="search-input"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				type="text"
				placeholder="Поиск"
			></input>
			<i className="bi bi-search"></i>
		</div>
	);
};

export default SearchInput;
