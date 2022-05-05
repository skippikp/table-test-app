import React, { useState } from 'react';

const TableHeader = ({ name, filter, onClick }) => {
	const [sorted, setSorted] = useState(false);
	const filterName = () => {
		if (sorted) {
			setSorted(false);
			return filter;
		}
		setSorted(true);
		return `${filter}-reverse`;
	};

	return (
		<th onClick={() => onClick(filterName())}>
			<div className="table-heading">
				<span>{name}</span> &#709;
			</div>
		</th>
	);
};

export default TableHeader;
