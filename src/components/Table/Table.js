import React from 'react';
import TableHeader from '../TableHeader/TableHeader';
import PersonInfo from '../PersonInfo/PersonInfo';
import EmptyRows from './EmtyRows/EmptyRows';
import './Table.css';

const Table = ({ headers, setFilter, visiblePersons }) => {
  return (
    <table className="custom-table table ">
      <thead className="table-head align-middle ">
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
        {visiblePersons.length < 10 && (
          <EmptyRows visibleRows={visiblePersons} />
        )}
      </tbody>
    </table>
  );
};

export default Table;
