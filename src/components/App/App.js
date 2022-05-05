import './App.css';
import SearchInput from '../SearchInput/SearchInput';
import { Routes, Route } from 'react-router-dom';
import TableContainer from '../TableContainer/TableContainer';

function App() {
  return (
    <div className="container mt-5 ">
      <SearchInput />
      <Routes>
        <Route path="/" element={<TableContainer />} />{' '}
        <Route
          path="/table-test-app/:currentPage"
          element={<TableContainer />}
        />{' '}
        <Route path="*" element={<TableContainer />} />{' '}
      </Routes>{' '}
    </div>
  );
}

export default App;
