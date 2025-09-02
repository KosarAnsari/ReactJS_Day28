import { NavLink, Route, Routes } from 'react-router';
import './App.css';
import UserAdd from './UserAdd';
import UserList from './UserList';
import Useredit from './Useredit';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<Useredit />} />
      </Routes>

      <ul className="nav-list">
        <li>
          <NavLink to="/">User List</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
      </ul>
    </>
  );
}
export default App;
