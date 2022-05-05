import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';
import { setPersons } from '../../actions';
import { useParams } from 'react-router-dom';
import Table from '../Table/Table';

const TableContainer = ({
	persons,
	personsPerPage,
	searchParam,
	setPersons,
}) => {
	const [loading, setLoading] = useState(false);
	const [filter, setFilter] = useState('');

	const { currentPage = 1 } = useParams();

	useEffect(() => {
		setLoading(true);
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => {
				setPersons(data);
				setLoading(false);
			});
	}, []);

	const search = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(
			(item) =>
				item.id.toString().includes(term) ||
				item.title.includes(term) ||
				item.body.includes(term)
		);
	};

	const sortPersons = (items, filter) => {
		const copyItems = items.concat();

		switch (filter) {
			case 'id':
				return copyItems.sort((a, b) => {
					return a.id < b.id ? 1 : -1;
				});
			case 'id-reverse':
				return copyItems.sort((a, b) => {
					return a.id > b.id ? 1 : -1;
				});
			case 'title':
				return copyItems.sort((a, b) => {
					return a.title > b.title ? 1 : -1;
				});
			case 'title-reverse':
				return copyItems.sort((a, b) => {
					return a.title < b.title ? 1 : -1;
				});
			case 'body':
				return copyItems.sort((a, b) => {
					return a.body > b.body ? 1 : -1;
				});
			case 'body-reverse':
				return copyItems.sort((a, b) => {
					return a.body < b.body ? 1 : -1;
				});
			default:
				return items;
		}
	};

	const sortedItems = sortPersons(search(persons, searchParam), filter);
	const lastPersonIndex = currentPage * personsPerPage;
	const firstPersonIndex = lastPersonIndex - personsPerPage;
	const visiblePersons = sortedItems.slice(firstPersonIndex, lastPersonIndex);

	const headers = [
		{ name: 'ID', filter: 'id' },
		{ name: 'Заголовок', filter: 'title' },
		{ name: 'Описание', filter: 'body' },
	];

	return (
		<React.Fragment>
			{loading ? <Spinner /> : null}
			<Table
				headers={headers}
				setFilter={setFilter}
				visiblePersons={visiblePersons}
			/>
			<Pagination
				personsPerPage={personsPerPage}
				totalPersons={sortedItems.length}
				currentPage={currentPage}
			/>
		</React.Fragment>
	);
};

const mapStateToProps = ({ persons, personsPerPage, searchParam }) => {
	return {
		persons,
		personsPerPage,
		searchParam,
	};
};

const mapDispatchToProps = { setPersons };

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
