import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Useredit from './Useredit';

function UserList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const url = 'http://localhost:3000/users';

  const deleteuser = async (id) => {
    let response = await fetch(url + '/' + id, {
      method: 'delete',
    });
    response = await response.json();
    if (response) {
      alert('record deleted');
      getUserData();
    }
  };

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
    setLoading(false);
  };

  const edituser = (id) => {
    navigate('/edit/' + id);
  };
  return (
    <>
      <h2>Integrate JSON Server API and Loader</h2>

      <ul className="user-list-header">
        <li>Age</li>
        <li>Name</li>
        <li>Email</li>
        <li>Action</li>
        <li>Update</li>
      </ul>

      {!loading ? (
        userData.map((user, idx) => (
          <ul key={idx} className="user-list">
            <li>{user.Age}</li>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={() => deleteuser(user.id)}>Delete</button>
            </li>
            <li>
              <button onClick={() => edituser(user.id)}>Edit</button>
            </li>
          </ul>
        ))
      ) : (
        <h3>Data Loading...</h3>
      )}
    </>
  );
}
export default UserList;
