import React, { useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Pagination.css';

const Pagination = ({ personsPerPage, totalPersons, currentPage }) => {
  const pageNumbers = [];
  const allPages = useMemo(() => pageNumbers, [totalPersons]);
  const navigate = useNavigate();

  for (let i = 1; i <= Math.ceil(totalPersons / personsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (allPages.length < currentPage && allPages.length !== 0) {
      navigate(`/${pageNumbers.length}`);
    }
  }, [allPages]);

  const previousPage = +currentPage > 1 ? +currentPage - 1 : currentPage;
  const nextPage =
    +currentPage < pageNumbers.length ? +currentPage + 1 : currentPage;

  const pageNumberClass = (number) => {
    return +number === +currentPage ? 'page-number active' : 'page-number';
  };

  return (
    <div className="d-flex justify-content-around align-items-center pagination">
      <Link className="page-item" to={`/table-test-app/${previousPage}`}>
        Назад
      </Link>
      <ul className="d-flex justify-content-center">
        {pageNumbers.map((number) => (
          <li className={pageNumberClass(number)} key={number}>
            <Link to={`/table-test-app/${number}`}>{number}</Link>
          </li>
        ))}
      </ul>
      <Link to={`/table-test-app/${nextPage}`}>Далее</Link>
    </div>
  );
};

export default Pagination;
