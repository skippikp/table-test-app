import React from 'react';

const PersonInfo = ({ id, title, body }) => {
	return (
		<tr>
			<td>{id}</td>
			<td>{title}</td>
			<td>{body}</td>
		</tr>
	);
};

export default PersonInfo;
