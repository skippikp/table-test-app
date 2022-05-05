import React from 'react';
import TableHeader from '../TableHeader/TableHeader';
import PersonInfo from '../PersonInfo/PersonInfo';
import './Table.css';

const Table = ({ headers, setFilter, visiblePersons }) => {
  const renderEmptyRows = () => {
    const emptyRowsCount = 10 - visiblePersons.length;
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

  return (
    <table className="custom-table table ">
      <thead className="table-header align-middle ">
        <tr>
          {headers.map(({ name, filter }, id) => {
            return (
              <TableHeader
                key={id}
                name={name}
                filter={filter}
                onClick={setFilter}
              />
            );
          })}
        </tr>
      </thead>
      <tbody>
        {visiblePersons.map(({ id, title, body }) => {
          return <PersonInfo key={id} id={id} title={title} body={body} />;
        })}
        {visiblePersons.length < 10 && renderEmptyRows()}
      </tbody>
    </table>
  );
};

export default Table;
