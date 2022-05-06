import React from 'react';

const EmptyRows = ({ visibleRows }) => {
  const emptyRowsCount = 10 - visibleRows.length;
  let emptyRowsArr = [];

  for (let i = 1; i <= emptyRowsCount; i++) {
    emptyRowsArr.push(i);
  }

  return emptyRowsArr.map((item) => {
    return (
      <tr key={item}>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  });
};

export default EmptyRows;
